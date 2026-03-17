Page({
  data: {
    skills: []
  },
  
  onLoad() {
    this.loadSkills()
  },
  
  onShow() {
    this.loadSkills()
  },
  
  loadSkills() {
    const skills = wx.getStorageSync('skills') || []
    this.setData({
      skills
    })
  },
  
  formatTime(timeStr) {
    const date = new Date(timeStr)
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
  },
  
  goToSkillDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/skill-detail/skill-detail?id=${id}`
    })
  }
})
