
export default {
    namespaced: true,
    state: {
        list: [
            {
                id: 1,
                name: '5TTr'
            },
            {
                id: 2,
                name: '6TTr'
            },
            {
                id: 3,
                name: '6Ga'
            },
            {
                id: 4,
                name: '6Gb'
            },
            {
                id: 5,
                name: '6Gc'
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
        },

        update(state, info) {
            let cls = state.list.find((c) => c.id == info.id)
            
            cls.name = info.cls.name
        }
    }
}