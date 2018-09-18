
export default {
    namespaced: true,
    state: {
        // null == nothing selected
        // -1 == creating exam
        // >= 0 == editing exam
        examId: null
    },

    mutations: {
        changeId(state, id) {
            state.examId = id
        }
    },

    actions: {
        // Changes the id to the closest ID it can find
        changeIdClosest({ state, rootState, commit }, id) {
            let exams = rootState.data.exams.list

            // Will be undefined if list is empty
            let closest = exams[0]

            // https://stackoverflow.com/questions/8584902/get-closest-number-out-of-array
            for (let exam of exams) {
                if (Math.abs(id - exam.id) < Math.abs(id - closest.id)) {
                    closest = exam
                }
            }

            return commit('changeId', closest !== undefined ? closest.id : null)
        }
    }
}