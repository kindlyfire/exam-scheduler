<template>
    <div>
        <div class="d-flex flex-row">
            <p class="alert text-center fw-300 flex-grow"><i>Sauvegardé</i></p>

            <p class="alert alert-error cursor-pointer" @click="deleteProf">
                <fa-icon icon="trash" />
            </p>
        </div>

        <div class="pane-container">
            <input v-model="prof.name" type="text" class="input input-lg d-block w-100" placeholder="Nom">
        </div>
    </div>
</template>
e
<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            profId: state => state.panes.profs.profId,
        }),

        prof() {
            return this.$store.state.data.profs.list.find(p => p.id == this.profId)
        }
    },

    methods: {
        deleteProf() {
            this.$store.commit('data/profs/delete', this.prof)
            this.$store.commit('panes/profs/changeId', null)
        }
    }
}
</script>
