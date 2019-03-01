import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sweepstakes/:id',
      name: 'single-sweepstake',
      component: SingleSweepstake
    },
    {
      path: '/admin',
      name: 'admin-home',
      component: AdminHome
    },
    {
      path: '/admin/sweepstakes/new',
      name: 'admin-sweepstakes-new',
      component: AdminNewSweepstake
    },
    {
      path: '/admin/sweepstakes/:id/edit',
      name: 'admin-sweepstakes-edit',
      component: AdminEditSweepstake
    },

  ]
})





// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
