<template>
    <component :is="comp"></component>
</template>

<script>
import { mapState } from 'vuex'

import mainUi from './components/main-ui.vue'
import fileLoader from './components/file-loader.vue'

export default {
    computed: {
        ...mapState({
            loaded: state => state.loaded
        }),

        comp() {
            return this.loaded ? mainUi : fileLoader
        }
    }
}
</script>
