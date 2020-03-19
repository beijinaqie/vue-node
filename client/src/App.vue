<template>
  <div id="app">
    <p>hello Vue + node</p>
    hahaha 你好啊!!111000
    {{ imgUrl }}
    <img class="img" src="@/assets/img/1.jpg" alt="">
    {{ userInfo }}----
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      userInfo: null,
      imgUrl: require('@/assets/img/1.jpg')
    }
  },
  created () {
    const F = () => {
      console.log(111)
    }
    F()
    this.getUser()
  },
  methods: {
    async getUser () {
      this.userInfo = await axios.get('/user')
      console.log(this.userInfo.data)
    }
  }
}
</script>

<style scoped lang="scss">
.img {
  width: 100px;
  height: auto;
}
</style>