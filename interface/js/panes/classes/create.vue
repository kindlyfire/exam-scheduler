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
            <input v-model="cls.name" type="text" class="input input-lg d-block w-100" placeholder="Nom">
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    data() {
        let emptyClass = {
            name: ''
        }

        return {
            cls: JSON.parse(JSON.stringify(emptyClass)),
            emptyClass
        }
    },

    methods: {
        empty() {
            this.$set(this, 'cls', JSON.parse(JSON.stringify(this.emptyClass)))
        },

        save() {
            if (this.cls.name == '') return

            this.$store.commit('data/classes/add', this.cls)
            this.$store.commit('panes/classes/changeId', this.cls.id)
        }
    }
}
</script>
