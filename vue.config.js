module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/rayne-desserts" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/data.scss"; @import "~@/assets/scss/mixins.scss";`
      }
    }
  }
}
