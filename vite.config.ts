import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import * as path from "path";

export default defineConfig({
  cacheDir: "./node_modules/.vite/array-operations",

  plugins: [
    dts({
      entryRoot: "src",
      tsconfigPath: path.join(__dirname, "tsconfig.json"),
    }),
  ],
  build: {
    lib: {
      entry: "src/array-utils.ts",
      name: "array-operations",
      fileName: "index",
      formats: ["es", "cjs", "umd"],
    },
  },
});
