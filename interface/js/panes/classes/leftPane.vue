<template>
    <pane-list :elements="classes" :active-element="cls" :searchable-fields="['name']" @click="onPaneListElementClick">
        <template slot="buttons">
            <div @click="openClassCreator" class="action" v-tooltip.bottom="{content: 'Ajouter une classe', classes: 'pane-list-tooltip'}"><fa-icon icon="plus" /></div>
        </template>

        <template slot="list-element" slot-scope="{ element }">
            {{ element.name }}
        </template>
    </pane-list>
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import paneList from '../../components/pane-list.vue'

export default {
    name: 'class-left-pane',

    data() {
        return {}
    },

    computed: {
        ...mapState({
            classes: state => state.data.classes.list,
            classId: state => state.panes.classes.classId
        }),

        cls() {
            return this.classes.find(p => p.id == this.classId)
        }
    },

    methods: {
        ...mapMutations({
            changeClassId: 'panes/classes/changeId'
        }),

        openClassCreator() {
            this.changeClassId(-1)
        },

        onPaneListElementClick(el) {
            this.changeClassId(el.id)
        }
    },

    components: {
        paneList
    }
}
</script>