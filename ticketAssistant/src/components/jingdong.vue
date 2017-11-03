<template>
<div class="ticket">
  <div class="box">
    <div class="control">
      <div class="info">
        默认间隔时间
      </div>
      <div class="select is-primary">
        <select v-model="time">
          <option v-for="time in times" :value="time.value">{{ time.text }}</option>
        </select>
      </div>
      <div class="localTime">
        <span>本机时间：(性能问题，暂时屏蔽)</span>
        <span>{{nowDate.year}}年</span>
        <span>{{nowDate.mouth}}月</span>
        <span>{{nowDate.day}}日</span>
        <span>{{nowDate.hour}}时</span>
        <span>{{nowDate.minutes}}分</span>
        <span>{{nowDate.second}}秒</span>
      </div>
      <div class="qqGloup">
        <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=ca6d90b4a4dd56803b11940932094477c57b4f38ca9637f7893c646f879ddb07"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="神族九帝" title="神族九帝"></a>
      </div>
    </div>
  </div>
  <div class="boxes">
    <!-- <div class="box">
      <div class="info" v-show="!show">
        <div class="control">
          <p>199-100</p>
        </div>
        <div class="control">
          <p>199-100</p>
        </div>
        <div class="control">
          <p>199-100</p>
        </div>
      </div>
      <div class="iframe" v-show="show">
        <iframe :src="src"></iframe>
      </div>
      <div class="draw_button">
        <a class="button is-primary" @click="draw">开始抢券</a>
        <a class="button is-success" @click="stop">结束抢券</a>
      </div>
    </div> -->
    <div class="box">
      <div class="info" v-show="!show">
        <div class="control">
          <input class="input is-primary" placeholder="请输入抢券链接" v-model="api">
        </div>
      </div>
      <div class="iframe" v-show="show">
        <iframe :src="src"></iframe>
      </div>
      <div class="draw_button">
        <a class="button is-primary" @click="draw">开始抢券</a>
        <a class="button is-success" @click="stop">结束抢券</a>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="title">
      家居113-100
    </div>
    <code>
      https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"o1SAPkr8McqBZ8N1N9LhevAGKQg","from":"H5node","scene":"1","args":"key=0f7b088feeea4540b87c1c4797d81a0e,roleId=8869987","mitemAddrId":"","geo":{"lng":"","lat":""}}&client=wh5&clientVersion=1.0.0&area=&callback=jsonp9
    </code>
  </div>
  <div class="box">
    <div class="title">
      服装113-100
    </div>
    <code>
      https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"o1SAPkr8McqBZ8N1N9LhevAGKQg","from":"H5node","scene":"1","args":"key=ebbf381a37944e3f92ede837445d7172,roleId=8754258","mitemAddrId":"","geo":{"lng":"","lat":""}}&client=wh5&clientVersion=1.0.0&area=&callback=jsonp8
    </code>
  </div>
  <div class="box">
    <div class="title">
      家居113-100
    </div>
    <code>
      https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"o1SAPkr8McqBZ8N1N9LhevAGKQg","from":"H5node","scene":"1","args":"key=0f7b088feeea4540b87c1c4797d81a0e,roleId=8869987","mitemAddrId":"","geo":{"lng":"","lat":""}}&client=wh5&clientVersion=1.0.0&area=&callback=jsonp9
    </code>
  </div>
  <div class="box">
    <div class="title">
      服装半价2000-1000
    </div>
    <code>
      https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"2dWVnoE1Qh4UUJGvrchf2dB5NzVa","from":"H5node","scene":"1","args":"key=a2bf2053d14c4cc5afdfe4725367f43b,roleId=8823997","mitemAddrId":"","geo":{"lng":"","lat":""}}&client=wh5&clientVersion=1.0.0&area=&callback=jsonp2
    </code>
  </div>
  <div class="box">
    <div class="title">
      京东叮咚音响250
    </div>
    <code>
      https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"4YRdukNicmvHU1jaMa5re9YqJzFW","from":"H5node","scene":"1","args":"key=d93ee89bf4ff4db3bc4ed5e4f4d3b1d6,roleId=8772885","mitemAddrId":"","geo":{"lng":"","lat":""}}&client=wh5&clientVersion=1.0.0&area=&callback=jsonp2
    </code>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      src: '',
      api: '',
      show: false,
      time: 100,
      times: [
        {
          text: '10ms(电脑卡的别用100以下)',
          value: 10
        },
        {
          text: '20ms(电脑卡的别用100以下)',
          value: 20
        },
        {
          text: '30ms(电脑卡的别用100以下)',
          value: 30
        },
        {
          text: '40ms(电脑卡的别用100以下)',
          value: 40
        },
        {
          text: '50ms(电脑卡的别用100以下)',
          value: 50
        },
        {
          text: '60ms(电脑卡的别用100以下)',
          value: 60
        },
        {
          text: '70ms(电脑卡的别用100以下)',
          value: 70
        },
        {
          text: '80ms(电脑卡的别用100以下)',
          value: 80
        },
        {
          text: '90ms(电脑卡的别用100以下)',
          value: 90
        },
        {
          text: '100ms(默认使用)',
          value: 100
        },
        {
          text: '200ms',
          value: 200
        },
        {
          text: '300ms',
          value: 300
        },
        {
          text: '400ms',
          value: 400
        },
        {
          text: '500ms',
          value: 500
        },
        {
          text: '600ms',
          value: 600
        }
      ],
      nowDate: {
        year: null,
        mouth: null,
        day: null,
        hour: null,
        minutes: null,
        second: null
      },
      flag: true
    }
  },
  mounted () {
    // setInterval(this.getNowTime, 200)
  },
  methods: {
    getNowTime () {
      let nowTime = new Date()
      this.nowDate.year = nowTime.getFullYear()
      this.nowDate.mouth = nowTime.getMonth() + 1
      this.nowDate.day = nowTime.getDate()
      this.nowDate.hour = nowTime.getHours()
      this.nowDate.minutes = nowTime.getMinutes()
      this.nowDate.second = nowTime.getSeconds()
    },
    timer () {
      console.log(this.time)
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.ticket {
  .box {
    margin: 30px 40px 0;
    .control {
      display: flex;
      flex-direction: row;
      .info {
        display: flex;
        align-items: center;
        padding: 0 20px;
      }
      .localTime {
        display: flex;
        align-items: center;
        padding: 0 20px;
      }
      .qqGloup {
        display: flex;
        align-items: center;
        padding: 0 20px;
      }
    }
  }
  .boxes {
    display: flex;
    .box {
      .info {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 284px;
          height: 134px;
          .control {
            padding-bottom: 10px;
          }
      }
      .iframe {
        display: flex;
        justify-content: center;
        width: 284px;
        height: 134px;
      }
      .draw_button {
        display: flex;
        justify-content:space-around;
      }
    }
  }
}
</style>
