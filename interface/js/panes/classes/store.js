
export default {
    namespaced: true,
    state: {
        // null == nothing selected
        // -1 == creating class
        // >= 0 == editing class
        classId: null
    },

    mutations: {
        changeId(state, id) {
            state.classId = id
        }
    }
}