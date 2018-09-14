
<template>
    <div class="panel-container">
        <div class="panel-pane panel-pane-1">
            <router-link to="/profs">
                <fa-icon icon="user-tie" class="pane-icon"
                    v-tooltip.right="{content: 'Professeurs', classes: 'panel-pane-1-tooltip'}"/>
            </router-link>
            <router-link to="/salles">
                <fa-icon icon="square" class="pane-icon"
                    v-tooltip.right="{content: 'Salles', classes: 'panel-pane-1-tooltip'}"/>
            </router-link>
            
            <router-link to="/classes">
                <fa-icon icon="users" class="pane-icon"
                    v-tooltip.right="{content: 'Classes', classes: 'panel-pane-1-tooltip'}"/>
            </router-link>
            
            <router-link to="/examens">
                <fa-icon icon="pencil-alt" class="pane-icon"
                    v-tooltip.right="{content: 'Examens', classes: 'panel-pane-1-tooltip'}"/>
            </router-link>

            <router-link to="/run" style="margin-top: auto">
                <fa-icon icon="play" class="pane-icon"
                    v-tooltip.right="{content: 'Calculer un horaire', classes: 'panel-pane-1-tooltip'}"/>
            </router-link>
        </div>
        <div class="panel-pane panel-pane-2">
            <component :is="leftPaneComp"></component>
        </div>
        <div class="panel-pane panel-pane-3">
            <component :is="rightPaneComp"></component>
        </div>
    </div>
</template>

<script>
import profsLeftPane from './panel/profs/leftPane.vue'
import profsRightPane from './panel/profs/rightPane.vue'

const panes = {
    profs: {
        leftPane: profsLeftPane,
        rightPane: profsRightPane
    }
}

export default {
    data() {
        return {
            panelName: 'profs'
        }
    },
    computed: {
        leftPaneComp() {
            return panes[this.panelName].leftPane
        },
        rightPaneComp() {
            return panes[this.panelName].rightPane
        }
    }
}
</script>