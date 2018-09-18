<template>
    <pane-list :elements="exams" :active-element="exam" :searchable-fields="['name']" @click="onPaneListElementClick">
        <template slot="buttons">
            <div @click="openExamCreator" class="action" v-tooltip.bottom="{content: 'Ajouter un examen', classes: 'pane-list-tooltip'}"><fa-icon icon="plus" /></div>
        </template>

        <template slot="list-element" slot-scope="{ element }">
            {{ element.name || '&lt;vide&gt;' }}
        </template>
    </pane-list>
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import paneList from '../../components/pane-list.vue'

export default {
    name: 'exam-left-pane',

    data() {
        return {}
    },

    computed: {
        ...mapState({
            exams: state => state.data.exams.list,
            examId: state => state.panes.exams.examId
        }),

        exam() {
            return this.exams.find(p => p.id == this.examId)
        }
    },

    methods: {
        ...mapMutations({
            changeExamId: 'panes/exams/changeId'
        }),

        openExamCreator() {
            this.changeExamId(-1)
        },

        onPaneListElementClick(el) {
            this.changeExamId(el.id)
        }
    },

    components: {
        paneList
    }
}
</script>