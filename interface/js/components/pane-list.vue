<template>
    <div class="pane-list">
        <div class="actions">
            <input v-model="searchQuery" class="action search-bar" type="text" placeholder="Chercher...">            
            <slot name="buttons"></slot>
        </div>
        <div class="item-list">
            <div v-for="(el, i) in shownElements" :key="i" class="item" :class="{active: i == activeResourceId}" @click="onClick(i)">
                <slot name="list-element" :element="el"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: ['elements', 'activeResourceId', 'searchableFields', 'bus'],
    data() {
        return {
            searchQuery: ''
        }
    },
    computed: {
        shownElements() {
            var words = this.searchQuery.split(' ')

            return this.elements
                .map((el, id) => {
                    el.id = id
                    return el
                })
                .filter((el) => {
                    for (var field of this.searchableFields) {
                        // Check that the fields content is a string
                        if (!(typeof el[field] == 'string' || el[field] instanceof String)) {
                            continue
                        }

                        for (var word of words) {
                            if (el[field].toLowerCase().indexOf(word.toLowerCase()) === -1) {
                                return false
                            }
                        }
                    }

                    return true
                })
        }
    },
    methods: {
        onClick(id) {
            this.bus.$emit('panel-list:element:click', id)
        }
    }
}
</script>