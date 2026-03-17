Page({
  data: {
    name: '',
    skill: '',
    contact: '',
    images: []
  },
  
  bindNameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  
  bindSkillInput(e) {
    this.setData({
      skill: e.detail.value
    })
  },
  
  bindContactInput(e) {
    this.setData({
      contact: e.detail.value
    })
  },
  
  chooseImage() {
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePaths = res.tempFilePaths
        this.setData({
          images: [...this.data.images, ...tempFilePaths]
        })
      }
    })
  },
  
  deleteImage(e) {
    const index = e.currentTarget.dataset.index
    const images = [...this.data.images]
    images.splice(index, 1)
    this.setData({
      images
    })
  },
  
  submitSkill() {
    if (!this.data.name || !this.data.skill || !this.data.contact) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      })
      return
    }
    
    // 模拟数据提交
    const skillData = {
      id: Date.now(),
      name: this.data.name,
      skill: this.data.skill,
      contact: this.data.contact,
      images: this.data.images,
      createTime: new Date().toISOString()
    }
    
    // 存储到本地缓存
    const skills = wx.getStorageSync('skills') || []
    skills.push(skillData)
    wx.setStorageSync('skills', skills)
    
    wx.showToast({
      title: '提交成功',
      icon: 'success'
    })
    
    // 跳转到首页
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }
})
