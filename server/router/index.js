const express = require('express')
const router = express.Router()
const axios = require('axios')

// 显示首页
router.get('/user', (req, res) => {
  axios.get('http://api.guaqb.cn/music/music/?input=002B2EAA3brD5b&filter=id&type=qq&new=yes')
  .then(data => {
    res.json(data.data)
  })
})

module.exports = router