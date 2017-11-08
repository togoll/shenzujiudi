<template>
  <div id="app">
    <div class="notification is-success header">
      <a target="_blank" href="http://newbug.xyz">网站首页</a>
      <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=b62b68cb21fb3255c6797a34660e96c60b0f92f6bdec2761b301de7d67797823"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="神族九帝" title="神族九帝"></a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app {
  .header {
    display: flex;
    justify-content: space-between;
    a {
      text-decoration: none;
    }
  }
}
</style>
