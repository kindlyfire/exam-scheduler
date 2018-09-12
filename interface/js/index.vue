
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
        </div>
        <div class="panel-pane panel-pane-2"><p>List</p></div>
        <div class="panel-pane panel-pane-3"><p>Other</p></div>
    </div>
</template>
