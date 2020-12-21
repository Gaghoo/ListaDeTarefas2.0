<template>
    <v-app>
        <NavBar/>
        <v-main class="blue-grey lighten-4">
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>
import NavBar from './components/NavBar'

export default {
    name: 'App',

    components:{
        NavBar
    },

    data: () => ({
        //
    }),
};
</script>
