<template>
    <div>
        <template v-if="classId === null">
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
    name: 'class-right-pane',

    computed: {
        ...mapState({
            classId: state => state.panes.classes.classId
        }),

        comp() {
            if (this.classId < 0) return createComp
            
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
