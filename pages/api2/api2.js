// pages/api2/api2.js
Page({

  /**
   * Page initial data
   */
  data: {
    name: "",
    age: 0,

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    this.getData()
  },

  getData(){
    console.log("12345");
    wx.request({
      url: 'http://127.0.0.1:9000/save',
      method: 'POST',
      data: {
        name: "qxdo2",
        "age": 20,
      },
      header: {
        'content-type': 'application/json',
        'chatset': 'UTF-8'
      },
      success: res=>{
        console.log(res.data);
      }
    })
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