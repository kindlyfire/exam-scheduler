
import Vuex from 'vuex'

import dataStore from './data'
import profPaneStore from './panes/profs/store'
import classPaneStore from './panes/classes/store'
import examPaneStore from './panes/exams/store'

const panes = {
    namespaced: true,
    modules: {
        profs: profPaneStore,
        classes: classPaneStore,
        exams: examPaneStore
    }
}

export default () => new Vuex.Store({
    state: {
        panelName: 'profs',
        loaded: false
    },
    mutations: {
        changePanelView (state, name) {
            state.panelName = name
        },

        loaded (state, status) {
            state.loaded = !!status
        }
    },
    modules: {
        data: dataStore,
        panes
    }
})