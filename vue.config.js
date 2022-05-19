
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/main.scss";`
      }
    }
  },

  publicPath: 'https://cdn.jsdelivr.net/gh/russo97/trois-landing-page@master/dist',

  filenameHashing: false
}
