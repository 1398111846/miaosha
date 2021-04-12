<template>
    <div class="app-wrapper" :class="classObj">
        <Sidebar class="sidebar-container"></Sidebar>
        <div class="main-container">
            <navbar></navbar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
export default {
    name: 'layout',
    components: {
        Navbar,
        Sidebar,
        AppMain
    },
    computed: {
        classObj: {
            
        }
    }
}
</script>