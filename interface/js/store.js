
import Vuex from 'vuex'

export default () => new Vuex.Store({
    state: {
        panelName: 'profs',
        data: {
            profs: {
                groups: [

                ],
                children: [
                    {
                        id: 1,
                        name: 'C. Belot'
                    },
                    {
                        id: 2,
                        name: 'I. Vanquaethem'
                    },
                    {
                        id: 3,
                        name: 'E. Michel'
                    },
                    {
                        id: 4,
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
    }
})