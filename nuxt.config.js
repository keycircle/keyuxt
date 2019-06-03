const path = require("path");

const PATHS = {
  root: path.resolve(__dirname, "./"),
  app: path.resolve(__dirname, "./app")
};

const pkg = require("./package");

module.exports = {
  mode: "universal",
  rootDir: PATHS.root,
  srcDir: PATHS.app,
  parallel: true,
  sourcemap: false,
  cache: true,
  /*
   ** Headers of the page
   */
  head: {
    title: "Keyuxt",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      // { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto+Condensed:400,700,700i|Roboto:400,400i,700,700i' }
    ]
  },
  env: {
    KEYSTONE_URL:
      process.env.NODE_ENV !== "production"
        ? `http://localhost:${process.env.PORT}`
        : process.env.BASE_URL
  },
  transition: {
    name: "layout",
    mode: "out-in"
  },
  modules: [],
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#311b92" },
  css: [
    // SCSS file in the project
    "@/assets/styles/main.scss"
  ],
  router: {
    middleware: ["example"]
  },
  /*
   ** Build configuration
   */
  build: {
    splitChunks: {
      layouts: true
    }
  },
  cssSourceMap: false
};
