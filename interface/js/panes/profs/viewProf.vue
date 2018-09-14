<template>
    <p>Viewing prof {{ prof.name }}</p>
</template>

<script>
export default {
    name: 'view-prof',
    computed: {
        prof() {
            var id = this.$store.state.panel.id
            var prof = this.$store.state.data.profs.children[id]

            return prof
        }
    }
}
</script>
