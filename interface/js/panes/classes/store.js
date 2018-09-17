
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
    },

    actions: {
        // Changes the id to the closest ID it can find
        changeIdClosest({ state, rootState, commit }, id) {
            let classes = rootState.data.classes.list

            // Will be undefined if list is empty
            let closest = classes[0]

            // https://stackoverflow.com/questions/8584902/get-closest-number-out-of-array
            for (let cls of classes) {
                if (Math.abs(id - cls.id) < Math.abs(id - closest.id)) {
                    closest = cls
                }
            }

            return commit('changeId', closest !== undefined ? closest.id : null)
        }
    }
}