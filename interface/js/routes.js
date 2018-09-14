
import VueRouter from 'vue-router'

export const router = new VueRouter({
    routes: [
        {path: "/profs", component: {}},
        {path: "/salles", component: {}},
        {path: "/classes", component: {}},
        {path: "/examens", component: {}},
    ]
})

// Open /profs when the app launches
router.replace('/profs')