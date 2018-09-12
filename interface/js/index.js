
import Vue from 'vue'
import index from './index.vue'
import createStore from './store'
import { router } from './routes'

// 
// Setup Vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 
// Setup Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// 
// Setup Tooltips
import VTooltip from 'v-tooltip'
Vue.use(VTooltip)

// 
// Setup FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
Vue.component('fa-icon', FontAwesomeIcon)

// 
// Start Vue
Vue.config.productionTip = false

new Vue({
    el: '#app',
    store: createStore,
    router,
    render (h) {
        return h(index)
    }
})