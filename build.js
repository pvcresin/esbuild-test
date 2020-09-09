const { build } = require("esbuild");

// https://github.com/evanw/esbuild/blob/master/docs/js-api.md

build({
  entryPoints: ["./src/index.tsx"],
  outdir: "./dist",
  minify: false,
  bundle: true,
  platform: "browser",
  sourcemap: "inline",
  loader: {
    // 拡張子とloaderが異なる場合に紐づける
    ".tsx": "tsx",
  },
  define: {
    "process.env.NODE_ENV": true,
  },
})
  .then(() => console.log("compiled!"))
  .catch(() => process.exit(1));
