
import Vue from 'vue/dist/vue.common'
import index from './index.vue'
import createStore from './store'

// 
// Setup Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

const store = createStore()

// 
// Setup Vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { router } from './routes'
router.beforeEach((to, from, next) => {
    var name = to.path.split('/')[1]
    store.commit('changePanelView', name)
    next()
})

// Open /profs when the app launches
router.replace('/profs')

// 
// Setup Tooltips
import VTooltip from 'v-tooltip'
Vue.use(VTooltip, {
    defaultPopperOptions: {
        modifiers: {
            computeStyle: {
                // GPU acceleration makes tooltips blurry due to a chromium bug
                gpuAcceleration: false
            }
        }
    }
})

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
    store,
    router,
    render (h) {
        return h(index)
    }
})