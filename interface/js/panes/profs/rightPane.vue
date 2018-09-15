<template>
    <div>
        <template v-if="prof === null">
            <p class="text-center text-muted">Sélectionnez ou ajoutez un prof pour commencer</p>
        </template>

        <template v-else>
            <div class="d-flex flex-row">
                <p v-if="prof.id < 0" @click="saveProf" class="alert alert-warn text-center cursor-pointer flex-grow">Ajouter le/la prof</p>
                <p v-else class="alert text-center fw-300 flex-grow"><i>Sauvegardé</i></p>

                <p class="alert alert-error cursor-pointer" @click="deleteProf">
                    <fa-icon icon="trash" />
                </p>
            </div>

            <div class="pane-container">
                <input v-model="prof.name" type="text" class="input input-lg d-block w-100" placeholder="Nom">
            </div>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'prof-right-pane',

    data() {
        return {
            emptyProf: {
                id: null,
                name: '',
                blockedDates: []
            }
        }
    },

    computed: {
        ...mapState({
            profs: state => state.data.profs,
            profId: state => state.panes.profs.profId
        }),

        prof() {
            return this.profs.find(p => p.id == this.profId) || null
        }
    },

    methods: {
        saveProf() {},

        deleteProf() {}
    }
}
</script>

<style>
.add-to-list-container {
    background-color: red;
}
</style>
