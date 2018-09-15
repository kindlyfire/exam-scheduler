
export default {
    namespaced: true,
    state: {
        // null == nothing selected
        // -1 == creating prof
        // >= 0 == editing prof
        profId: null
    },

    mutations: {
        changeId(state, id) {
            state.profId = id
        }
    }
}