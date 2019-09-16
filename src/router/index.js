import Vue from 'vue'
import Router from 'vue-router'
import frontEndPage from '@/components/frontEndPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'frontEndPage',
      component: frontEndPage
    }
  ]
})
