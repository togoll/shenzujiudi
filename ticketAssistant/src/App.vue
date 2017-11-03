<template>
  <div id="app">
    <div class="container">
      <!-- 北京时间 -->
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
        <!-- 登陆京东 -->
        <div class="">
          <a href="https://home.m.jd.com/myJd/newhome.action" class="button is-link" target="_blank">登陆京东</a>
        </div>
      </div>
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
</style>
