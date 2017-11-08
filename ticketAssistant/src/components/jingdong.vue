<template>
<div class="jingdong">
  <div class="shenjianjiange">
    <div class="select is-primary">
      <select v-model="time">
        <option v-for="time in times" :value="time.value">{{ time.text }}</option>
      </select>
    </div>
  </div>
  <div class="step">
    <div class="step1">
      <p>第一步：选择浏览器，推荐使用谷歌浏览器,请提前5-15秒开始,新增默认20秒之后自动结束</p>
    </div>
    <div class="step2">
      <p>第二步：</p><a href="https://home.m.jd.com/myJd/newhome.action" class="button is-link" target="_blank">登陆京东</a>
    </div>
    <div class="step3">
      <p>第三步：</p><a href="javascript:;" class="button is-link">点击下面的开始</a>
      <div class="localTime">
        <span>本机时间：</span>
        <span>{{nowDate.year}}年</span>
        <span>{{nowDate.mouth}}月</span>
        <span>{{nowDate.day}}日</span>
        <span>{{nowDate.hour}}时</span>
        <span>{{nowDate.minutes}}分</span>
        <span class="red">{{nowDate.second}}秒</span>
      </div>
      <a href="https://www.baidu.com/s?wd=%E6%97%B6%E9%97%B4&rsv_spt=1&rsv_iqid=0xb67449a50001ced2&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=7&rsv_sug1=4&rsv_sug7=100" class="button is-link" target="_blank">百度时间</a>
    </div>
  </div>
  <div class="boxes">
    <template v-for="api in apis">
      <ticket :name="api.name" :api="api.api" :date="api.date" :time="time"></ticket>
    </template>

    <!-- <div class="box">
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
    </div> -->
  </div>
  <!-- <div class="box">
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
  <div class="box">
    <div class="title">
      个护113-100
    </div>
    <code>
      https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"o1SAPkr8McqBZ8N1N9LhevAGKQg","from":"H5node","scene":"1","args":"key=65408a0ddfd74eacbae517c31e191e91,roleId=8725700","mitemAddrId":"","geo":{"lng":"","lat":""}}&client=wh5&clientVersion=1.0.0&area=&callback=jsonp9
    </code>
  </div>
  <div class="box">
    <div class="title">
      羊城通100-50
    </div>
    <code>
      https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"o1SAPkr8McqBZ8N1N9LhevAGKQg","from":"H5node","scene":"1","args":"key=35b10eb7413a4cf6b558d0d1a4bd9874,roleId=8653070","mitemAddrId":"","geo":{"lng":"","lat":""}}&client=wh5&clientVersion=1.0.0&area=&callback=jsonp8
    </code>
  </div>
  <div class="box">
    <div class="title">
      999-888
    </div>
    <code>
      https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body={"activityId":"o1SAPkr8McqBZ8N1N9LhevAGKQg","from":"H5node","scene":"1","args":"key=66ab3083d1bf485eb732d9d62953b8ef,roleId=8739331","mitemAddrId":"","geo":{"lng":"","lat":""}}&client=wh5&clientVersion=1.0.0&area=&callback=jsonp8
    </code>
  </div> -->
</div>
</template>

<script>
import ticket from '@/components/ticket'
export default {
  name: 'HelloWorld',
  data () {
    return {
      src: '',
      api: '',
      show: false,
      time: 300,
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
          text: '100ms',
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
      apis: [
        {
          name: '新服饰五折神券',
          api: 'https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%222dWVnoE1Qh4UUJGvrchf2dB5NzVa%22%2C%22from%22%3A%22H5node%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D3ce22bbf278e4320bfa490f64513f82c%2CroleId%3D8824030%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%7D&client=wh5&clientVersion=1.0.0&sid=f77ff103b7ca65b4702fc4a8357ad99d&uuid=14987832905831375727030&area=&_=1510106676174&callback=jsonp2',
          date: '10，14点'
        },
        {
          name: '母婴348-100',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_rabzvy&roleId=8978895&actId=f91d9f6b36a84e23b075254e7f6e9286',
          date: '0,10,14,20点,京享值5000'
        },
        {
          name: '母婴自营全品类748-300',
          api: 'https://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%223XvLR3MnLXHjjJ4uCgYetfAcqpzT%22%2C%22from%22%3A%22H5node%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3Df22825db960e40bf83a030da70096236%2CroleId%3D8978843%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%7D&client=wh5&clientVersion=1.0.0&sid=f77ff103b7ca65b4702fc4a8357ad99d&uuid=14987832905831375727030&area=&_=1510102677363&callback=jsonp2',
          date: '十点'
        },
        {
          name: '京东牛奶满减券',
          api: 'http://api.m.jd.com/client.action?functionId=newBabelAwardCollection&body=%7B%22activityId%22%3A%22d4jNpRbDEY9rpEniFAEmj78Qdbk%22%2C%22from%22%3A%22H5node%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3D97e20267d665495caad9c37c656887f1%2CroleId%3D8705018%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D%7D&client=wh5&clientVersion=1.0.0&sid=7935131e5d49ca293545a79c70a2ac17&uuid=467679440&area=&_=1509551079787&callback=jsonp12',
          date: '10点！【牛奶神券】'
        },
        {
          name: '叮咚TOP智能音箱',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_qpzw52&roleId=8772885&actId=d93ee89bf4ff4db3bc4ed5e4f4d3b1d6',
          date: '10点，限PLUS'
        },
        {
          name: '京东手机980-150',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_rcxzg9&roleId=8930108&actId=72b902f190444d76bc3574b28d43845a',
          date: '小米部分手机专享'
        },
        {
          name: '京东手机1980-300',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_rcxzg9&roleId=8930106&actId=82f2b2dce46c4275b3015d3bb27b1e58',
          date: '0，8，10，14，20点'
        },
        {
          name: '京东手机2980-400',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_rzaahh&roleId=8930105&actId=3b659e6813354bc1b9f11183ca5a58d9',
          date: '0，8，10，14，20点'
        },
        {
          name: '京东手机4980-700',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_zrcxcc&roleId=8929852&actId=a3061fbd1f374d72a9d1751d16d51036',
          date: '0，8，10，14，20点,京享值5000'
        },
        {
          name: '非自营手机5200-1111',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_rcxzg9&roleId=8930106&actId=82f2b2dce46c4275b3015d3bb27b1e58',
          date: '20点，部分手机适用'
        },
        {
          name: '手机配件99-88',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_zq72ls&roleId=8705547&actId=bb66a606388d4c8c813234af55b5cc41',
          date: '11,20点'
        },
        {
          name: '京东手机2980-400',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_rzaahh&roleId=8930105&actId=3b659e6813354bc1b9f11183ca5a58d9',
          date: '0，8，10，14，20点'
        },
        {
          name: '京东手机4980-700',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_zrcxcc&roleId=8929852&actId=a3061fbd1f374d72a9d1751d16d51036',
          date: '0，8，10，14，20点'
        },
        {
          name: '京东手机6000-1111',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_rd2z62&roleId=8929863&actId=f22161604981403cb477f148fe777404',
          date: '0，8，10，14，20点'
        },
        {
          name: 'APPLE平板电脑1000-500',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_zq58m6&roleId=8757211&actId=3dacc2a899c4414f88fc48b5bdcaa168',
          date: '神券'
        },
        {
          name: '福临门、安达露西部分商品188-166',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_qrvtzs&roleId=8811098&actId=35047a6da12d4692a077995002075dcc',
          date: '每日抢券'
        },
        {
          name: '油卡充值2000-521',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_qwz9g9&roleId=8653082&actId=45106c180c4b4f39af89a0d36ed1b811',
          date: '十点'
        },
        {
          name: '油卡充值1111-25',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_q7z4j4&roleId=8732754&actId=770e3c24dfd24335bbad854d1e541874',
          date: '十点'
        },
        {
          name: '油卡充值888-11',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_qkxxzl&roleId=8732758&actId=3e67c53faa8447a58f0ea85bb5300a29',
          date: '十点'
        },
        {
          name: '3C自有品牌999-888',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_qzu3qe&roleId=8739331&actId=66ab3083d1bf485eb732d9d62953b8ef',
          date: '十点'
        },
        {
          name: '女装商品499-100',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_qz74v3&roleId=8726204&actId=7ceeb981f81140278b7238bc5e1180a0',
          date: '1日至12日，限PLUS'
        },
        {
          name: '智能微联100-50',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_zqxfmu&roleId=8762609&actId=489b9c4962ad4d8dbc750a6453d68c69',
          date: '22点，叮咚音箱、智能冰箱及部分微联品商品'
        },
        {
          name: '羊城通100-50',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_quz3th&roleId=8653070&actId=35b10eb7413a4cf6b558d0d1a4bd9874',
          date: '十点'
        },
        {
          name: '手机话费90-2',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_qxwzen&roleId=8752719&actId=0e43a15ba1214599a24554b1a2d22a51',
          date: '十点'
        },
        {
          name: '手机话费190-5',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_zq7e6e&roleId=8752712&actId=7eede902ec494444a75fdc7c22cb263b',
          date: '十点'
        },
        {
          name: '手机话费199-100',
          api: 'http://coupon.m.jd.com/center/receiveCoupon.json?couponId=FP_qxwfzo&roleId=8752709&actId=686fd24a48d948988eeb4b4309a27ec7',
          date: '十点'
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
    setInterval(this.getNowTime, 1000)
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
    }
    // timer () {
    //   let a = setInterval(() => {
    //     if (this.src) {
    //       this.src = ''
    //     } else {
    //       this.src = this.api
    //     }
    //     if (this.flag === false) {
    //       clearInterval(a)
    //     }
    //   }, this.time / 2)
    // },
    // draw () {
    //   this.show = !this.show
    //   this.timer()
    // },
    // stop () {
    //   this.flag = false
    //   this.show = !this.show
    // }
  },
  components: {
    ticket
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.jingdong {
  .shenjianjiange {
    display:flex;
    justify-content: center;
  }
  .step {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    .step1 {
      padding: 20px 0 0 0;
    }
    .step2 {
      padding: 20px;
      p {
        padding-top: 8px;
        display: inline-block;
      }
      a {
        display: inline-block;
      }
    }
    .step3 {
      .localTime {
        padding: 10px 0;
        .red {
          color: red;
        }
      }
      p {
        padding-top: 8px;
        display: inline-block;
      }
      a {
        display: inline-block;
      }
    }
  }
  .boxes {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
