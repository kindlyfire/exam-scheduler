<template>
    <pane-list :elements="profs" :active-resource-id="currResourceId" :searchable-fields="['name']">
        <template slot="list-element" slot-scope="{ element }">
            {{ element.name }}
        </template>
    </pane-list>
</template>

<script>
import { mapState } from 'vuex'
import paneList from '../../components/pane-list.vue'

export default {
    data() {
        return {}
    },
    computed: mapState({
        profs: state => state.data.profs.children,
        currResourceId: state => state.currResourceId
    }),
    components: {
        paneList
    }
}
</script>