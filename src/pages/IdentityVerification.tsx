import Header from "../components/Header";

const IdentityVerification: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <Header page="Identity Verification" />

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Verify Student Identity</h2>
        <p className="text-gray-600 mb-4">
          Please ensure the student’s camera is enabled and follow the on-screen
          instructions to verify their identity.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-4">Step 1: Enable your camera</p>
          <p className="text-gray-700 mb-4">
            Step 2: Align your face within the frame
          </p>
          <p className="text-gray-700 mb-4">
            Step 3: Click "Verify" to proceed
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdentityVerification;
