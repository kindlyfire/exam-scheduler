<template>
    <div class="pane-container">
        <template v-if="prof === null">
            <p class="text-center text-muted">Sélectionnez ou ajoutez un prof pour commencer</p>
        </template>

        <template v-else>
            <input v-model="prof.name" type="text" class="input input-lg d-block w-100">
        </template>
    </div>
</template>

<script>
export default {
    name: 'prof-right-pane',

    props: ['panelBus'],

    created() {
        this.panelBus.$on('changeProfId', this.changeProfId)
    },
    destroyed() {
        this.panelBus.$off('changeProfId', this.changeProfId)
    },

    data() {
        return {
            emptyProf:{
                name: '',
                blockedDates: []
            },
            prof: null
        }
    },

    methods: {
        changeProfId(id) {
            let prof

            if (id == -1) {
                this.$set(this, 'prof', JSON.parse(JSON.stringify(this.emptyProf)))
                this.prof.id = id
            }
            else {
                this.$set(this, 'prof', this.$store.state.data.profs.children[id])
            }
        }
    }
}
</script>
