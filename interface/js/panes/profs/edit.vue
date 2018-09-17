<template>
    <div>
        <div class="d-flex flex-row">
            <p
                v-if="changed"
                @click="save"
                class="alert alert-warn text-center cursor-pointer flex-grow">
                
                Sauvegarder
            </p>
            <p v-else class="alert text-center fw-300 flex-grow"><i>Sauvegardé</i></p>

            <p class="alert alert-error cursor-pointer" @click="remove">
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
    data() {
        return {
            prof: {},
            uneditedProf: {},
            changed: false
        }
    },

    computed: {
        ...mapState({
            profId: state => state.panes.profs.profId,
        }),

        profName() {
            return this.prof.name
        }
    },

    watch: {
        profId() {
            this.updateProf()
        },

        profName() {
            this.changed = !this.profEquals(this.prof, this.uneditedProf)
        }
    },

    methods: {
        updateProf() {
            let prof = this.$store.state.data.profs.list.find(p => p.id == this.profId)

            if (this.prof == null || this.prof.id != prof.id) {
                this.prof = JSON.parse(JSON.stringify(prof))
                this.uneditedProf = prof
                this.changed = false
            }
        },

        profEquals(p1, p2) {
            return p1.name == p2.name
        },

        remove() {
            this.$store.commit('data/profs/delete', this.prof)
            this.$store.dispatch('panes/profs/changeIdClosest', this.prof.id)
        },

        save() {
            this.$store.commit('data/profs/update', {
                id: this.prof.id,
                prof: this.prof
            })

            // Reset the state
            this.prof = null
            this.updateProf()
        }
    },

    created() {
        this.updateProf()
    }
}
</script>
