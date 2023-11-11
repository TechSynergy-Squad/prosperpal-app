import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@project": `${__dirname}/src`,
      "@assets": `${__dirname}/src/assets`,
    },
  },
  plugins: [react()],
});
