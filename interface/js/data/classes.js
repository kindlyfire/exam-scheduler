
export default {
    namespaced: true,
    state: {
        list: [
            {
                id: 1,
                name: '5TTr'
            }
        ]
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
        }
    }
}