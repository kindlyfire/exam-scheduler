
export default {
    namespaced: true,
    state: {
        // -1 == nothing selected
        // -2 == creating prof
        // >= 0 == editing prof
        profId: -1
    },

    mutations: {
        changeId(state, id) {
            state.profId = id
        }
    }
}