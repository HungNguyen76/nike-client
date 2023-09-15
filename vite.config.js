import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@rtk": fileURLToPath(new URL("./src/stores/slices", import.meta.url)),
      "@api": fileURLToPath(new URL("./src/services/api", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@comp": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@img": fileURLToPath(new URL("./src/assets/images", import.meta.url)),
      "@imgCate": fileURLToPath(new URL("./src/assets/images/category", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@scss": fileURLToPath(new URL("./src/scss/index.scss", import.meta.url)),
    },
  },
});
