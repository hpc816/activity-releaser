// pages/publish_1/publish_1.js
Page({
  bindCategoryChange: function (e) {
    this.setData({
      catevalue: e.detail.value
    })
  },
  bindAuthorityChange: function (e) {
    this.setData({
      authvalue: e.detail.value
    })
  },
  bindModeChange:function(e){
    this.setData({
      modeIndex: e.detail.value
    })
  },
  next_step: function (e) {
    console.log(e)
    this.setData({
      active_name: e.detail.value.active_name,
      holder: e.detail.value.holder,
      range: e.detail.value.range,
    })
    wx.setStorageSync('basic_data', this.data);
    wx.navigateTo({
      url: './../publish_2/publish_2'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    active_name: "",
    holder: "",
    range: "",
    category: ['体育类', '唱歌类', '写作类', '知识竞赛类'],
    joinMode:["线上","线下"],
    catevalue: 0,
    modeIndex:0,
    authority: ["所有人可见", "仅本校可见", "仅本学院可见"],
    authvalue: 0,
    date_start: "2020-1-1",
    date_end: "2020-1-1",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})