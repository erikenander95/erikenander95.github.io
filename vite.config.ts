import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/erikenander95.github.io/",
  plugins: [react()],
  build: {
    outDir: "docs", // <-- bygg till docs istället för dist
  },
});
