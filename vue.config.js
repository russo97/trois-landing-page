
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/main.scss";`
      }
    }
  },

  publicPath: 'https://github.com/russo97/trois-landing-page/blob/master/dist',

  filenameHashing: false
}
