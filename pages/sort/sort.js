Page({
  data: {
    array: ['全部','计算机科学与工程学院', '公共管理学院', '外国语学院', '医学院'],
    objectArray: [
      {
        id: 0,
        name: '全部'
      },
      {
        id: 1,
        name: '计算机科学与工程学院'
      },
      {
        id: 2,
        name: '公共管理学院'
      },
      {
        id: 3,
        name: '外国语学院'
      },
      {
        id: 4,
        name: '医学院'
      }
    ],
    index: 0,
    activityStyle:['全部','体育类','唱歌类','写作类','知识竞赛类'],
    objectActivityStyle:[
      {
        id: 0,
        name: '全部'
      },
      {
        id:1,
        name:'体育类'
      },
      {
        id:2,
        name:'唱歌类'
      },
      {
        id: 3,
        name: '写作类' 
      },
      {
        id: 4,
        name: '知识竞赛类'
      }
    ],
    activityIndex:0,
    modeArray:['全部','线上','线下'],
    objectModeArray:[
      {
        id: 0,
        name: '全部'
      },
      {
        id:1,
        name:'线上'
      },
      {
        id:2,
        name: '线下'
      }
    ],
    modeIndex:0,
    multiArray: [['四川省', '广西省'], ['电子科技大学', '四川大学', '西南财经大学']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '四川省'
        },
        {
          id: 1,
          name: '广西省'
        }
      ], [
        {
          id: 0,
          name: '电子科技大学'
        },
        {
          id: 1,
          name: '四川大学'
        },
        {
          id: 2,
          name: '西南财经大学'
        },
       ]],
    multiIndex: [0, 0, 0]
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  cancel:function(){
    wx.navigateBack({
      delta: 1
    })
  },
 repeat:function(){
   this.setData({
     activityIndex: 0,
     modeIndex:0,
     multiIndex: [0, 0, 0],
     index:0
   })
 },
  bindPickerChangeStyle: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      activityIndex: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindPickerChangeMode: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      modeIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['电子科技大学', '四川大学', '西南财经大学'];
            break;
          case 1:
            data.multiArray[1] = ['广西大学' , '桂林电子科技大学'];
            break;
        }
        data.multiIndex[1] = 0;
        break;
    }
    console.log(data.multiIndex);
    this.setData(data);
  },
})
