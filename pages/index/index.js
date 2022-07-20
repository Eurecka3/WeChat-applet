// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    wording: "你看懂了吗"
  },
  onClick: function() {
    this.setData({
      wording: "我看懂了"
    })
  },

  123: function() {
    this.setData({
      wording: "我没看懂"
    })
  }
})
