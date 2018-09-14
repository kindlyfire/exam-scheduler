<template>
    <component :is="comp"></component>
</template>

<script>
import addProf from './addProf.vue'
import viewProf from './viewProf.vue'

export default {
    name: 'prof-right-pane',
    computed: {
        comp() {
            var action = this.$store.state.panel.action

            if (action == 'view') return viewProf
            if (action == 'add') return addProf

            console.log('Cannot find component for action in profs/rightPane.vue')
            return viewProf
        }
    }
}
</script>
