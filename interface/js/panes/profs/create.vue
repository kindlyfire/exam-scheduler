<template>
    <div>
        <div class="d-flex flex-row">
            <p
                @click="save"
                class="alert alert-warn text-center cursor-pointer flex-grow">
                
                Sauvegarder
            </p>

            <p class="alert alert-error cursor-pointer" @click="empty">
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
        let emptyProf = {
            id: null,
            name: '',
            blockedDates: []
        }

        return {
            prof: JSON.parse(JSON.stringify(emptyProf)),
            emptyProf
        }
    },

    methods: {
        empty() {
            this.$set(this, 'prof', JSON.parse(JSON.stringify(this.emptyProf)))
        },

        save() {
            if (this.name == '') return

            this.$store.commit('data/profs/add', this.prof)
            this.$store.commit('panes/profs/changeId', this.prof.id)
        }
    }
}
</script>
