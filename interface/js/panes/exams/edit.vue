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
            <input @input="hasChanged" v-model="exam.name" type="text" class="input input-lg d-block w-100" placeholder="Nom">

            <p class="mb-0">Longueur de l'examen (en heures):</p>
            <input @input="hasChanged" v-model.number="exam.length" type="text" class="input d-block w-100 mt-1">

            <p class="mb-0">Date forcée:</p>
            <input @input="hasChanged" v-model="exam.forcedDate" type="text" class="input d-block w-100 mt-1">
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            exam: {},
            uneditedExam: {},
            changed: false
        }
    },

    computed: {
        ...mapState({
            examId: state => state.panes.exams.examId,
        })
    },

    watch: {
        examId() {
            this.updateExam()
        }
    },

    methods: {
        updateExam() {
            let exam = this.$store.state.data.exams.list.find(p => p.id == this.examId)

            if (this.exam == null || this.exam.id != exam.id) {
                this.exam = JSON.parse(JSON.stringify(exam))
                this.uneditedExam = exam
                this.changed = false
            }
        },

        remove() {
            this.$store.commit('data/exams/delete', this.exam)
            this.$store.dispatch('panes/exams/changeIdClosest', this.exam.id)
        },

        save() {
            this.$store.commit('data/exams/update', {
                id: this.exam.id,
                exam: this.exam
            })

            // Reset the state
            this.exam = null
            this.updateExam()
        },

        hasChanged() {
            this.changed = true
        }
    },

    created() {
        this.updateExam()
    }
}
</script>
