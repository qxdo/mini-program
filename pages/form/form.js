// pages/form/form.js
Page({

  /**
   * Page initial data
   */
  data: {
    iptValue: "",
    dataList: [
      {id:1, title: "测试1，测试2 测试3"},
      {id:2, title: "测试4，测试5 测试6"},
      {id:3, title: "测试7，测试8 测试9"},
    ],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },
  onDelete(e){

    wx.showModal({
      title: '确认删除吗？',
      complete: (res) => {
        if (res.confirm) {
          let {index} = e.currentTarget.dataset
          let arr = this.data.dataList
          console.log(index)
          arr.splice(index, 1)
          this.setData({
            dataList: arr,
          })
        }
      }
    })
  
    
  },
  onSubmit(){
    let value = this.data.iptValue
    let arr = this.data.dataList
    arr.push({
      id: Date.now(),
      title: value,
    })
    this.setData({
      dataList: arr,
      iptValue: "",
    })

    wx.showToast({
      title: '发布成功',
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