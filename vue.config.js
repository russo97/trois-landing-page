
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/main.scss";
          @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
        `
      }
    }
  },

  publicPath: process.env.NODE_ENV === "production"
    ? 'https://cdn.jsdelivr.net/gh/russo97/trois-landing-page@master/dist'
    : '/'
}
