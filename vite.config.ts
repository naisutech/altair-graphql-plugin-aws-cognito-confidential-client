import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/app.ts"),
      name: "app",
      fileName: (format) => `app.${format}.js`,
    },
    rollupOptions: {
      output: {
        globals: {},
      },
    },
  },
}));
