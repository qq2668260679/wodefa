App({
  onLaunch() {
    // 初始化数据
    if (!wx.getStorageSync('skills')) {
      wx.setStorageSync('skills', [])
    }
  },
  
  globalData: {
    userInfo: null
  }
})