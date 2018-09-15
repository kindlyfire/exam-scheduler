<template>
    <div>
        <template v-if="profId === null">
            <p class="text-center text-muted">Sélectionnez ou ajoutez un prof pour commencer</p>
        </template>

        <template v-else>
            <component :is="comp"></component>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import createComp from './create.vue'
import editComp from './edit.vue'

export default {
    name: 'prof-right-pane',

    data() {
        return {
            emptyProf: {
                id: null,
                name: '',
                blockedDates: []
            }
        }
    },

    computed: {
        ...mapState({
            profId: state => state.panes.profs.profId
        }),

        comp() {
            if (this.profId < 0) return createComp
            
            return editComp
        }
    }
}
</script>

<style>
.add-to-list-container {
    background-color: red;
}
</style>
