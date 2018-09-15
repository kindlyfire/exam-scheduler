
import Vuex from 'vuex'

import dataStore from './data'
import profPaneStore from './panes/profs/store'

const panes = {
    namespaced: true,
    modules: {
        profs: profPaneStore
    }
}

export default () => new Vuex.Store({
    state: {
        panelName: 'profs'
    },
    mutations: {
        changePanelView (state, name) {
            state.panelName = name
        },
    },
    modules: {
        data: dataStore,
        panes
    }
})