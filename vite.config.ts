import { defineConfig } from "vite";
import { resolve } from "path";
import uni from "@dcloudio/vite-plugin-uni";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), viteCommonjs()],
  resolve: {
    alias: [
      // @/xxxx => src/xxxx
      {
        find: /@\//,
        replacement: pathResolve("src") + "/",
      },
    ],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
});
