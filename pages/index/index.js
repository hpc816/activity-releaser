const app = getApp()
let index = app.globalData.index;
let temp = app.globalData.temp;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    activities:{},
    navTab: ["推荐", "热门", "收藏"],
    currentNavtab: "0",
  },
  // 跳转到搜索页面
  search: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  sortAction: function () {
    wx.navigateTo({
      url: '../sort/sort',
    })
  },

  onShow: function () {
    const that = this;
    var a = wx.getStorageSync('activitiesStore');
    console.log(wx.getStorageSync('activitiesStore'));
    console.log("a"+a);
    index++;
    app.globalData.index = index;
    app.globalData.temp = temp;
    console.log("temp " + app.globalData.temp)
    console.log(app.globalData.index);
    if (temp) {
      that.data = temp;
      that.setData(that.data);
      console.log(that);
      this.data.activities={};
     for(var i = 0; i <=index; i++){
       this.data.activities[i] = temp[i];
     }
    }
    console.log("activities "+this.data.activities)
  },
  jumpToPublish: function () {
    wx.navigateTo({
      url: '../publish_1/publish_1',
      success: function (res) {
      },
      fail: function (res) {
      },
      complete: function (res) {
      },
    })
  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
})
