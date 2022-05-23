
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/main.scss";`
      }
    }
  },

  publicPath: process.env.NODE_ENV === "production"
    ? 'https://cdn.jsdelivr.net/gh/russo97/trois-landing-page@master/dist'
    : '/'
}
