Page({
  data: {
  },
  
  goToSkillUpload() {
    wx.navigateTo({
      url: '/pages/skill-upload/skill-upload'
    })
  },
  
  goToEmployerList() {
    wx.navigateTo({
      url: '/pages/employer-list/employer-list'
    })
  }
})
