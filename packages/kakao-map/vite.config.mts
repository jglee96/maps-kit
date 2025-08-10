import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/KakaoMapService.ts"),
      name: "MapsKitKakaoMap",
      fileName: "index",
    },
    rollupOptions: {
      external: ["@maps-kit/core"],
      output: {},
    },
  },
});
