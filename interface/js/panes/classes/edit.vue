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
            <input v-model="cls.name" @input="hasChanged" type="text" class="input input-lg d-block w-100" placeholder="Nom">

            <p class="mt-1 mb-0">Ajouter un examen:</p>
            <exam-list :cls="cls" @change="hasChanged"></exam-list>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import examListComp from './examsListComp.vue'

export default {
    data() {
        return {
            cls: {},
            uneditedClass: {},
            changed: false
        }
    },

    computed: {
        ...mapState({
            classId: state => state.panes.classes.classId
        }),
    },

    watch: {
        classId() {
            this.updateClass()
        },
    },

    methods: {
        updateClass() {
            let cls = this.$store.state.data.classes.list.find(c => c.id == this.classId)

            if (this.cls == null || this.cls.id != cls.id) {
                this.cls = JSON.parse(JSON.stringify(cls))
                this.uneditedClass = cls
                this.changed = false
            }
        },

        remove() {
            this.$store.commit('data/classes/delete', this.cls)
            this.$store.dispatch('panes/classes/changeIdClosest', this.cls.id)
        },

        hasChanged() {
            this.changed = true
        },

        save() {
            this.$store.commit('data/classes/update', {
                id: this.cls.id,
                cls: this.cls
            })

            // Reset the state
            this.cls = null
            this.updateClass()
        }
    },

    created() {
        this.updateClass()
    },

    components: {
        examList: examListComp
    }
}
</script>
