import Vue from 'vue'
import Router from 'vue-router'
import Photo from '../pages/Photo.vue'
import ItemInformation from '../pages/ItemInformation.vue'
import ItemsPreview from '../pages/ItemsPreview.vue'
import UserInformation from '../pages/UserInformation.vue'
import Complete from '../pages/Complete.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'photo',
      component: Photo
    },
    {
      path: '/item_information',
      name: 'itemInformation',
      component: ItemInformation
    },
    {
      path: '/items_preview',
      name: 'itemsPreview',
      component: ItemsPreview
    },
    {
        path: '/user_information',
        name: 'userInformation',
        component: UserInformation
    },
    {
        path: '/complete',
        name: 'complete',
        component: Complete
      }
  ]
})