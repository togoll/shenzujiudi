<template>
  <div id="app">
    <div class="notification is-success header">
      <a target="_blank" href="http://newbug.xyz">网站首页</a>
      <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=99852687fdf5d718e2335897258bb83729a0d48dbde7d893a2e57de7f06f6413"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="神族九帝" title="神族九帝"></a>
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
