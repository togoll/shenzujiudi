<template lang="html">
  <div class="box">
    <div class="notification is-success" v-show="!show">
        <h1>{{name}}</h1>
        <p>{{date}}</p>
    </div>
    <div class="iframe" v-show="show">
      <iframe :src="src"></iframe>
    </div>
    <div class="draw_button">
      <a class="button is-warning" @click="draw">开始抢券</a>
      <a class="button is-primary" @click="stop">结束抢券</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      flag: true,
      src: ''
    }
  },
  props: {
    name: {
      type: String
    },
    api: {
      type: String
    },
    date: {
      type: String
    },
    time: {
      type: Number
    }
  },
  methods: {
    timer () {
      let a = setInterval(() => {
        if (this.src) {
          this.src = ''
        } else {
          this.src = this.api
        }
        if (this.flag === false) {
          clearInterval(a)
        }
      }, this.time / 2)
      setTimeout(() => {
        clearInterval(a)
        this.show = !this.show
      }, 20000)
    },
    draw () {
      this.show = !this.show
      this.timer()
    },
    stop () {
      this.flag = false
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss">
.box {
  width: 270px;
  margin-left: 10px;
  .notification {
    line-height: 2;
    min-height: 150px;
    text-align: center;
    h1 {
      font-size: 20px;
    }
  }
  .iframe {

  }
  .draw_button {
    display: flex;
    justify-content: space-around;
  }
}
</style>
