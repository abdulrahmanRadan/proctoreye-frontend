import Header from "../components/Header";
import { useRef, useState, useCallback } from "react";

const IdentityVerification: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);
  const [isVerificationStarted, setIsVerificationStarted] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const enableCamera = async () => {
    try {
      // الحصول على تدفق الفيديو من الكاميرا
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(videoStream);

      // ربط تدفق الفيديو بالكاميرا
      if (videoRef.current) {
        videoRef.current.srcObject = videoStream;

        // بدء تشغيل الفيديو عند تحميل البيانات
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play().catch((error) => {
            console.error("Error playing the video:", error);
          });
        };
      }

      setIsCameraEnabled(true);
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const disableCamera = useCallback(() => {
    if (stream) {
      // إيقاف جميع المسارات
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null; // إزالة مصدر الفيديو
    }

    setIsCameraEnabled(false);
  }, [stream]);

  const startVerification = () => {
    if (isCameraEnabled) {
      console.log("Verification started");
      setIsVerificationStarted(true);
      // Add your verification logic here
    } else {
      console.warn("Camera is not enabled. Cannot start verification.");
    }
  };

  const stopVerification = () => {
    console.log("Verification stopped");
    setIsVerificationStarted(false);
    // Add your logic to stop verification
  };

  return (
    <div className="flex flex-col">
      {/* الهيدر */}
      <Header page="Identity Verification" />

      {/* محتوى الصفحة */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Verify Student Identity</h2>
        <div className="flex flex-col items-center">
          {/* عرض الفيديو */}
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full max-w-md border rounded-lg shadow-lg"
          ></video>

          {/* أزرار التحكم */}
          <div className="mt-4 flex gap-4">
            <button
              className={`px-4 py-2 rounded-lg ${
                isCameraEnabled
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              onClick={isCameraEnabled ? disableCamera : enableCamera}
            >
              {isCameraEnabled ? "Disable Camera" : "Enable Camera"}
            </button>

            <button
              className={`px-4 py-2 rounded-lg ${
                isVerificationStarted
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
              onClick={
                isVerificationStarted ? stopVerification : startVerification
              }
              disabled={!isCameraEnabled}
            >
              {isVerificationStarted
                ? "Stop Verification"
                : "Start Verification"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityVerification;
