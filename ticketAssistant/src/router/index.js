import Vue from 'vue'
import Router from 'vue-router'
import jingdong from '@/components/jingdong'
import suning from '@/components/suning'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'jingdong',
      component: jingdong
    },
    {
      path: '/suning',
      name: 'suning',
      component: suning
    }
  ]
})
