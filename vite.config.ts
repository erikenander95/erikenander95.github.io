import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // <-- Viktigt för användarsidan
  plugins: [react()],
  build: {
    outDir: "docs", // <-- behåll detta
  },
});
