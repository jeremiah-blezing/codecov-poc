import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { codecovVitePlugin } from "@codecov/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    codecovVitePlugin({
      enableBundleAnalysis: process.env.CI === "true",
      bundleName: "next-amazon",
      uploadToken: process.env.CODECOV_TOKEN,
      telemetry: false,
    }),
  ],
});
