import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/erikenander95.github.io/", // Viktigt för GitHub Pages
  plugins: [react()],
});
