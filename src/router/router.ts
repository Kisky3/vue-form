import Vue from 'vue'
import Router from 'vue-router'
// import Photo from '../pages/Photo.vue'
import ItemInformation from '../pages/ItemInformation.vue'
import ItemsList from '../pages/ItemsList.vue'
import UserInformation from '../pages/UserInformation.vue'
import Thanks from '../pages/Thanks.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  },
  routes: [
    /*{
      path: '/',
      name: 'photo',
      component: Photo
    },*/
    {
      path: '/',
      name: 'itemInformation',
      component: ItemInformation
    },
    {
      path: '/items_list',
      name: 'itemsList',
      component: ItemsList
    },
    {
      path: '/user_information',
      name: 'userInformation',
      component: UserInformation
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks
    }
  ]
})
