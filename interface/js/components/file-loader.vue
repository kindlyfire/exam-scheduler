<template>
    <div class="file-loader-container">
        <p v-if="error !== null" @click="hideError">{{ error }}</p>
        <button @click="openNew" class="btn d-block w-100">Ouvrir un nouveau</button>
        <button @click="openFileSelector" class="btn d-block w-100 mt-1">Open file</button>
    </div>
</template>

<script>
import { remote } from 'electron'

const fs = remote.require('fs')

export default {
    data() {
        return {
            error: null
        }
    },
    
    methods: {
        openFileSelector() {
            remote.dialog.showOpenDialog(
                {
                    filters: [
                        {
                            name: 'json',
                            extensions: ['json']
                        },
                        {
                            name: 'all',
                            extensions: ['*']
                        }
                    ],
                    properties: ['openFile']
                }, 
                (files) => {
                    if (files === undefined || files.length === 0) return

                    this.openFile(files[0])
                }
            )
        },

        openFile(file) {
            const rawState = fs.readFileSync(file, {encoding: 'utf-8'})
            let state
            
            try {
                state = JSON.parse(rawState)
            }
            catch(e) {
                this.error = 'Impossible d\'ouvrir le fichier.'
                return
            }

            this.populateState(state)
            this.$store.commit('loaded', true)
        },

        openNew() {
            this.populateState({})
            this.$store.commit('loaded', true)
        },

        populateState(state) {
            this.$store.commit('data/profs/populate', state.profs || [])
            this.$store.commit('data/classes/populate', state.classes || [])
            this.$store.commit('data/exams/populate', state.exams || [])
        },

        hideError() {
            this.error = ''
        }
    }
}
</script>
