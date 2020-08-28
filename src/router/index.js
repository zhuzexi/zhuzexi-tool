export default [{
  path: '/',
  name: '/',
  component: () => import('@/views/Home'),
  meta: {
    title: '首页'
  },
},{
  path: '/tocolor',
  name: '/tocolor',
  component: () => import('@/views/ToColor'),
  meta: {
    title: "颜色转换"
  }
},{
  path: '/*',
  redirect: '/',
  meta: {
    title: '首页'
  }
}]