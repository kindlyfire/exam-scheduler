
import Vuex from 'vuex'

export default () => new Vuex.Store({
    state: {
        panelName: 'profs',
        currResourceId: 0,
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
        }
    }
})