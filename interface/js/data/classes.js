
export default {
    namespaced: true,
    state: {
        list: []
    },

    mutations: {
        populate(state, list) {
            state.list = list
        },

        add(state, cls) {
            cls.id = ((state.list[state.list.length - 1] || {}).id || 0) + 1
            state.list.push(cls)
        },

        delete(state, cls) {
            state.list = state.list.filter((c) => c.id != cls.id)
        },

        update(state, info) {
            let cls = state.list.find((c) => c.id == info.id)
            
            cls.name = info.cls.name
            cls.exams = info.cls.exams
        }
    }
}