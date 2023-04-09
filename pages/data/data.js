// pages/data/data.js
Page({

  /**
   * Page initial data
   */
  data: {
    name: "qxdo",
    user: {
      name: "qxdo123456",
      age: 20,
      gender: "男",
      books: [
        {name: "红楼梦", page: 1000},
        {name: "三国演义", page: 800},
        {name: "春秋", page: 1500},
      ]
    },
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    setTimeout(()=>{
      this.setData({
        name: "qxdo1234"
      })

    }, 2000)
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})