import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBox, faUsers, faPiggyBank, faUserTag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

library.add(faBox, faUsers, faPiggyBank, faUserTag, faShoppingCart)
createApp(App).use(store).use(router).use(VueSweetalert2).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
