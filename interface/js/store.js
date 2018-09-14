
import Vuex from 'vuex'

export default () => new Vuex.Store({
    state: {
        panelName: 'profs',
        panel: {
            action: 'view',
            id: 0
        },
        data: {
            profs: {
                groups: [

                ],
                children: [
                    {
                        name: 'C. Belot'
                    },
                    {
                        name: 'I. Vanquaethem'
                    },
                    {
                        name: 'E. Michel'
                    },
                    {
                        name: 'G. Hublet'
                    },
                ]
            }
        }
    },
    mutations: {
        changePanelView (state, name) {
            state.panelName = name
        },
        changePanelAction (state, action) {
            state.panel.action = action
        },
        changePanelId (state, id) {
            state.panel.id = id
        }
    }
})