// pages/publish_2/publish_2.js

Page({
  bindMainInput: function (e) {
    console.log(e)
    this.setData({
      ['content.main_content']: e.detail.value,
    })
  },
  lastStep: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      count: 9 - this.data.files.length,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  removeImage: function (e) {
    var that = this
    var index = e.currentTarget.dataset.index;
    var files = that.data.files;
    files.splice(index, 1); //从数组中删除index下标位置，指定数量1，返回新的数组
    that.setData({
      files: files,
    });
  },
  finish: function (e) {
    var app = getApp();
    app.globalData.activities.push(this.data);
    this.setData({
      nickName:app.globalData.userInfo.nickName,
      userImage: app.globalData.userInfo.avatarUrl
    })
   // console.log(app.globalData.activities);
    if (app.globalData.activities) {
        wx.setStorageSync('activitiesStore', this.data);
    }
    wx.switchTab({
      url: '../index/index',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    basic_data: {
      active_name: "",
      holder: "",
      range: "",
      category: "",
      jodeMode:"",
      modeIndex:"",
      authority: "",
      date_start: "",
      date_end: "",
      nickName:"",
      userImage:"",
    },
    content: {
      main_content: "",
    },
    files: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var basic_data = wx.getStorageSync('basic_data');
   
    basic_data.category = basic_data.category[basic_data.catevalue];
    basic_data.authority = basic_data.authority[basic_data.authvalue];
    basic_data.joinMode = basic_data.joinMode[basic_data.modeIndex];
    delete basic_data.catevalue, basic_data.authvalue, basic_data.modeIndex;
    this.setData({
      basic_data,
      
    });
    wx.removeStorageSync('basic_data');
    
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