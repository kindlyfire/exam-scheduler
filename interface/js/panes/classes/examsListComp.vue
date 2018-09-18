<template>
    <div>
        <div class="d-flex comp-exam-list-select">
            <v-select :options="shownExams" label="name" v-model="selectedOption" class="flex-grow has-btn-right"></v-select>
            <button class="btn is-btn-right" @click="addSelection">Ajouter</button>
        </div>

        <ul class="comp-exam-list-list" v-if="classExams.length != 0">
            <li v-for="(e, i) in classExams" :key="i">
                {{ e.name }}

                <span class="action" @click="removeExam(e)">
                    <fa-icon icon="times"></fa-icon>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: ['cls'],

    data() {
        return {
            selectedOption: null
        }
    },

    computed: {
        ...mapState({
            exams: state => state.data.exams.list
        }),

        classExams() {
            return (this.cls.exams || []).map((e) => {
                return this.exams.find(r => r.id == e)
            })
        },

        shownExams() {
            return this.exams.filter((e) => {
                return !((this.cls.exams || []).indexOf(e.id) !== -1)
            })
        }
    },

    methods: {
        addSelection() {
            if (this.selectedOption == null || this.selectedOption.id === undefined) return

            let exams = this.cls.exams || []

            if (exams.indexOf(this.selectedOption.id) !== -1) return
            
            exams.push(this.selectedOption.id)
            this.$set(this.cls, 'exams', exams)

            // Clear the selected option
            this.selectedOption = null

            this.$emit('change')
        },

        removeExam(exam) {
            this.$set(this.cls, 'exams', this.cls.exams.filter(c => {
                return c != exam.id
            }))

            this.$emit('change')
        }
    }
}
</script>
