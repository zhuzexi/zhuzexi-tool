import Vue from 'vue'
import Router from 'vue-router'
import routerList from "./router/index"
Vue.use(Router)

let router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routerList
})

// router.beforeEach((to, from, next) => {
//   // 登录权限验证
//   if (to.path == '/login') {
//     //登录页
//     next()
//   } else {
//     if (store.state.Authorization) {// 判断是否登录
//       next()
//     } else {// 没登录则跳转到登录界面
//       Message({
//         message: "您还未登录",
//         type: 'warning',
//         duration: 3 * 1000
//       })
//       next({
//         path: '/login',
//       })
//     }
//   }
// })
router.afterEach((to) => {
  window.document.title = to.meta.title || "工具箱";
})
export default router
