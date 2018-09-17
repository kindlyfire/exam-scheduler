
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
    },

    actions: {
        // Changes the id to the closest ID it can find
        changeIdClosest({ state, rootState, commit }, id) {
            let profs = rootState.data.profs.list

            // Will be undefined if list is empty
            let closest = profs[0]

            // https://stackoverflow.com/questions/8584902/get-closest-number-out-of-array
            for (let prof of profs) {
                if (Math.abs(id - prof.id) < Math.abs(id - closest.id)) {
                    closest = prof
                }
            }

            return commit('changeId', closest !== undefined ? closest.id : null)
        }
    }
}