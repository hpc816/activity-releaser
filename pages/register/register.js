Page({
    data: {
      name: '',
      idNum: '',
      school: '',
      academy: '',
      flag:false,
      flag1:true
    },
    onShow(){
      const that = this;
      let name = wx.getStorageSync('name');
      let idNum = wx.getStorageSync('idNum');
      let school = wx.getStorageSync('school');
      let academy = wx.getStorageSync('academy');
      if(name && idNum && school &&academy){
        that.data.name = name;
        that.data.idNum = idNum;
        that.data.school = school;
        that.data.academy = academy;
        this.setData({
          flag: true,
          flag1: false
        })
        that.setData(that.data);
        console.log(that);
      }
    },
  next_step:function(e){
      console.log(e.detail.value);
      var objData = e.detail.value;
      if(objData.academy && objData.idNum && objData.school && objData.name){
        wx.setStorageSync('name', objData.name)
        wx.setStorageSync('idNum', objData.idNum)
        wx.setStorageSync('school', objData.school)
        wx.setStorageSync('academy', objData.academy)
        wx.navigateBack({
          delta:1
        })
      }
  }
  
})