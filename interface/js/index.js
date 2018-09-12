
const Vue = require('vue')

const index = require('./index.vue')

new Vue({
    el: '#app',
    render: function(h) {
        return h(index)
    }
})