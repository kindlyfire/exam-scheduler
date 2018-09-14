<template>
    <pane-list :elements="profs" :active-resource-id="activeResourceId" :searchable-fields="['name']" :bus="paneListBus">
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

    props: ['panelBus'],

    data() {
        return {
            // Bus shared with the pane list
            paneListBus: new Vue(),

            // Active prof ID
            activeResourceId: -1
        }
    },

    computed: mapState({
        profs: state => state.data.profs.children
    }),

    created() {
        this.paneListBus.$on('panel-list:element:click', (id) => {
            this.activeResourceId = id
            this.panelBus.$emit('changeProfId', id)
        })
    },
    methods: {
        openProfCreator() {
            // Prevent deleting tmp user by clicking on the button twice
            if (this.activeResourceId === -1) return

            this.panelBus.$emit('changeProfId', -1)
            this.activeResourceId = -1
        }
    },
    components: {
        paneList
    }
}
</script>