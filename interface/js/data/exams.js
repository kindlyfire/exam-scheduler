
export default {
    namespaced: true,
    state: {
        list: []
    },

    mutations: {
        populate(state, list) {
            state.list = list
        },

        add(state, exam) {
            exam.id = ((state.list[state.list.length - 1] || {}).id || 0) + 1
            state.list.push(exam)
        },

        delete(state, exam) {
            state.list = state.list.filter((e) => e.id != exam.id)
        },

        update(state, info) {
            let exam = state.list.find((e) => e.id == info.id)
            
            exam.name = info.exam.name
            exam.length = info.exam.length || 0
            exam.forcedDate = info.exam.forcedDate || ''
        }
    }
}