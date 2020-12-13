// miniprogram/pages/add/add.js
let canvas;
let ctx;
Page({
  saveCanvas() {
    wx.canvasToTempFilePath({
      canvas: canvas,
      success:(res)=>{
        console.log(res);
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    const query = wx.createSelectorQuery()
    query.select('#myCanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        canvas = res[0].node
        ctx = canvas.getContext('2d')

        const dpr = wx.getSystemInfoSync().pixelRatio
        canvas.width = res[0].width * dpr
        canvas.height = res[0].height * dpr
        ctx.scale(dpr, dpr)

        ctx.fillStyle='black'
        ctx.fillRect(0, 0, 300, 300)
      })
  },

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },


  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  askFor() {
    wx.cloud.callFunction({
      name: 'add',
      data: {a: 1, b: 2},
      success: (res) => {
        console.log(res)
      }
    })
  },
  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})