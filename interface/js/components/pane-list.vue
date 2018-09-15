<template>
    <div class="pane-list">
        <div class="actions">
            <input v-model="searchQuery" class="action search-bar" type="text" placeholder="Chercher...">            
            <slot name="buttons"></slot>
        </div>
        <div class="item-list">
            <div v-for="(el, i) in shownElements" :key="i" class="item" :class="{active: isActive(el)}" @click="onClick(el)">
                <slot name="list-element" :element="el"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: ['elements', 'activeElement', 'searchableFields', 'bus'],
    data() {
        return {
            searchQuery: ''
        }
    },
    computed: {
        shownElements() {
            var words = this.searchQuery.split(' ')

            return this.elements
                .map(el => {
                    // The best way to deep clone an object
                    return JSON.parse(JSON.stringify(el))
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
        isActive(el) {
            if (el != null && el.id !== undefined && this.activeElement != null && this.activeElement.id !== undefined) {
                return el.id == this.activeElement.id
            }

            return false;
        },
        onClick(el) {
            this.bus.$emit('click', el)
        }
    }
}
</script>