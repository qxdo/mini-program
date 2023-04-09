// pages/event/event.js
Page({

  /**
   * Page initial data
   */
  data: {
    name: "小明",
    age: 18,
    num: 0,
    backgroundColor: "red",
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },
  onGetUserInfo(event){
    console.log(event);
  },
  onClickBox(){
    let random = parseInt( Math.random() * 100)

    let r1 = parseInt( Math.random() * 255)
    let r2 = parseInt( Math.random() * 255)
    let r3 = parseInt( Math.random() * 255)
    let color = `rgb(${r1},${r2},${r3})`
    
    this.setData({
      num: random,
      backgroundColor: color
    })
  },
  onClick(event){
    let {age, myname} = event.currentTarget.dataset
    console.log("click event")
    console.log(event)
    console.log("age:", age, "myname:", myname);


    this.setData({
      name: myname,
      age
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