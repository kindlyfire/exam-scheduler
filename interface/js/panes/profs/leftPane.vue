<template>
    <pane-list :elements="profs" :active-element="prof" :searchable-fields="['name']" @click="onPaneListElementClick">
        <template slot="buttons">
            <div @click="openProfCreator" class="action" v-tooltip.bottom="{content: 'Ajouter un professeur', classes: 'pane-list-tooltip'}"><fa-icon icon="plus" /></div>
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
    name: 'prof-left-pane',

    data() {
        return {}
    },

    computed: {
        ...mapState({
            profs: state => state.data.profs.list,
            profId: state => state.panes.profs.profId
        }),

        prof() {
            return this.profs.find(p => p.id == this.profId)
        }
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