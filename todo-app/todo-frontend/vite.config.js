import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.js",
  },
  // server: {
  //   host: true,
  //   port: 5173,
  //   watch: {
  //     usePolling: true,
  //   },
  // },
});
