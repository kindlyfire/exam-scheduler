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
            <input v-model="exam.name" type="text" class="input input-lg d-block w-100" placeholder="Nom">
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        let emptyExam = {
            id: null,
            name: '',
            forcedDate: '',
            length: 2
        }

        return {
            exam: JSON.parse(JSON.stringify(emptyExam)),
            emptyExam
        }
    },

    methods: {
        empty() {
            this.$set(this, 'exam', JSON.parse(JSON.stringify(this.emptyExam)))
        },

        save() {
            if (this.exam.name == '') return

            this.$store.commit('data/exams/add', this.exam)
            this.$store.commit('panes/exams/changeId', this.exam.id)
        }
    }
}
</script>
