module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/data.scss"; @import "~@/assets/scss/mixins.scss";`
      }
    }
  }
}
