import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../dist", // تحديد مجلد الإخراج
  },
  resolve: {
    alias: {
      "@": "/app", // قم بتحديث المسار إلى المجلد الذي يحتوي الملفات.
    },
  },
});
