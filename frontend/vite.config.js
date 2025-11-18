import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],

  build: {
    outDir: "../backend/portfolio/static/react",  // <-- send build directly to Flask static
    emptyOutDir: true,            // <-- cleans old files automatically
    rollupOptions: {
      input: resolve(__dirname, "index.html"),
      output: {
        entryFileNames: "js/main.js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
