<template>
    <div>
        <template v-if="examId === null">
            <p class="text-center text-muted">Sélectionnez ou ajoutez un examen pour commencer</p>
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
    name: 'exam-right-pane',

    computed: {
        ...mapState({
            examId: state => state.panes.exams.examId
        }),

        comp() {
            if (this.examId < 0) return createComp
            
            return editComp
        }
    }
}
</script>
