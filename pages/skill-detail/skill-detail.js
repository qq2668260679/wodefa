Page({
  data: {
    skill: {}
  },
  
  onLoad(options) {
    const id = options.id
    this.loadSkillDetail(id)
  },
  
  loadSkillDetail(id) {
    const skills = wx.getStorageSync('skills') || []
    const skill = skills.find(item => item.id == id)
    if (skill) {
      this.setData({
        skill
      })
    } else {
      wx.showToast({
        title: '技能信息不存在',
        icon: 'none'
      })
      wx.navigateBack()
    }
  },
  
  formatTime(timeStr) {
    const date = new Date(timeStr)
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
  },
  
  previewImage(e) {
    const index = e.currentTarget.dataset.index
    const images = this.data.skill.images
    wx.previewImage({
      current: images[index],
      urls: images
    })
  }
})
