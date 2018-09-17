
export default {
    namespaced: true,
    state: {
        list: []
    },

    mutations: {
        populate(state, list) {
            state.list = list
        },

        add(state, prof) {
            prof.id = ((state.list[state.list.length - 1] || {}).id || 0) + 1
            state.list.push(prof)
        },

        delete(state, prof) {
            state.list = state.list.filter((p) => p.id != prof.id)
        },

        update(state, info) {
            let prof = state.list.find((p) => p.id == info.id)
            
            prof.name = info.prof.name
            prof.blockedDates = info.prof.blockedDates
        }
    }
}