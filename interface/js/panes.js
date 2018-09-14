
import profsLeftPane from './panes/profs/leftPane.vue'
import profsRightPane from './panes/profs/rightPane.vue'

import roomsLeftPane from './panes/rooms/leftPane.vue'
import roomsRightPane from './panes/rooms/rightPane.vue'

import classesLeftPane from './panes/classes/leftPane.vue'
import classesRightPane from './panes/classes/rightPane.vue'

import examsLeftPane from './panes/exams/leftPane.vue'
import examsRightPane from './panes/exams/rightPane.vue'

export default {
    profs: {
        leftPane: profsLeftPane,
        rightPane: profsRightPane
    },
    rooms: {
        leftPane: roomsLeftPane,
        rightPane: roomsRightPane
    },
    classes: {
        leftPane: classesLeftPane,
        rightPane: classesRightPane
    },
    exams: {
        leftPane: examsLeftPane,
        rightPane: examsRightPane
    },
}