<template>
    <div>
        <template v-if="prof === null">
            <p class="text-center text-muted">Sélectionnez ou ajoutez un prof pour commencer</p>
        </template>

        <template v-else>
            <p v-if="prof.id < 0" @click="saveProf" class="alert alert-warn text-center cursor-pointer">Ajouter le/la prof</p>
            <p v-else class="alert text-center fw-300"><i>Sauvegardé</i></p>

            <div class="pane-container">
                <input v-model="prof.name" type="text" class="input input-lg d-block w-100" placeholder="Nom">
            </div>
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
            emptyProf: {
                id: null,
                name: '',
                blockedDates: []
            },
            prof: null
        }
    },

    methods: {
        changeProfId(id) {
            let prof

            if (id < 0) {
                this.$set(this, 'prof', JSON.parse(JSON.stringify(this.emptyProf)))
                this.prof.id = id
            }
            else {
                this.$set(this, 'prof', this.$store.state.data.profs.children[id])
            }
        },

        saveProf() {
            // They are already saved
            if (this.prof.id >= 0 || this.prof.name === '') return

            let profs = this.$store.state.data.profs.children

            // 
            // @TODO: this is broken from the moment we start to actually use the "id" props of the profs objects
            // 
            this.prof.id = profs.length
            profs.push(this.prof)
            this.changeProfId(this.prof.id)
        }
    }
}
</script>

<style>
.add-to-list-container {
    background-color: red;
}
</style>
