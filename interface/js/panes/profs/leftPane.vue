<template>
    <pane-list :elements="profs" :active-resource-id="activeResourceId" :searchable-fields="['name']" :bus="bus">
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
import { mapState } from 'vuex'
import paneList from '../../components/pane-list.vue'

export default {
    name: 'prof-left-pane',
    data() {
        return {
            bus: new Vue()
        }
    },
    computed: mapState({
        profs: state => state.data.profs.children,
        activeResourceId: state => state.panel.id
    }),
    components: {
        paneList
    },
    methods: {
        openProfCreator() {
            console.log('Open')
        }
    },
    created() {
        this.bus.$on('panel-list:element:click', (id) => {
            console.log(id)
            this.$store.commit('changePanelId', id)
        })
    }
}
</script>