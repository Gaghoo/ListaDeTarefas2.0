<template>
    <nav>
        <v-app-bar
        color="deep-purple accent-4"
        dense
        dark
        app
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Lista de Tarefas</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn rounded text to="/tarefas">
                <span>Tarefas</span>
                <v-icon right>mdi-format-list-checks</v-icon>
            </v-btn>

            <v-btn rounded text to="/">
                <span>Home</span>
                <v-icon right>mdi-home-outline</v-icon>
            </v-btn>

            <v-btn rounded text to="/arquivo">
                <span>Arquivo</span>
                <v-icon right>mdi-file-cabinet</v-icon>
            </v-btn>
        </v-app-bar>
    </nav>
</template>