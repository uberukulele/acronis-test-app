const AboutScreen = () => import('@/components/about/AboutScreen')

export default [{
  path: '/',
  redirect: '/about'
}, {
  path: '/about',
  props: true,
  component: AboutScreen
}]
