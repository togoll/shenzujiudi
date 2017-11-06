<template>
  <div id="app">
    <div class="notification is-success header">
      <a target="_blank" href="http://newbug.xyz">网站首页</a>
      <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=ca6d90b4a4dd56803b11940932094477c57b4f38ca9637f7893c646f879ddb07"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="神族九帝" title="神族九帝"></a>
    </div>
    <!-- <div class="container">
      <div class="notification is-primary" style="display:flex;justify-content: space-around;">
        <a class="title" style="text-decoration: none;" href="http://newbug.xyz" target="_blank">
          网络时间(百度的)
        </a>
        <div style="width:390px;height:45px;position:relative;overflow:hidden;">
          <div style="position:absolute;top:-444px;left:-320px;">
            <iframe src="http://time.tianqi.com/" width="800" height="600" scrolling="no">
            </iframe>
          </div>
        </div>
        <div class="">
          <a href="https://home.m.jd.com/myJd/newhome.action" class="button is-link" target="_blank">登陆京东</a>
        </div>
      </div>
    </div> -->

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
