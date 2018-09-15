<template>
    <pane-list :elements="profs" :active-element="prof" :searchable-fields="['name']" :bus="paneListBus">
        <template slot="buttons">
            <div @click="openProfCreator" class="action" v-tooltip.bottom="{content: 'Ajouter un professeur', classes: 'pane-list-tooltip'}"><fa-icon icon="plus" /></div>
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
    name: 'prof-left-pane',

    data() {
        return {
            // Bus shared with the pane list
            paneListBus: new Vue()
        }
    },

    computed: {
        ...mapState({
            profs: state => state.data.profs,
            profId: state => state.panes.profs.profId
        }),

        prof() {
            return this.profs.find(p => p.id == this.profId)
        }
    },

    created() {
        this.paneListBus.$on('click', this.onPaneListElementClick)
    },
    destroyed() {
        this.paneListBus.$off('click', this.onPaneListElementClick)
    },

    methods: {
        ...mapMutations({
            changeProfId: 'panes/profs/changeId'
        }),

        openProfCreator() {
            this.changeProfId(-1)
        },

        onPaneListElementClick(el) {
            this.changeProfId(el.id)
        }
    },

    components: {
        paneList
    }
}
</script>