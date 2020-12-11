<template>
    <v-col cols="12" md="4" sm="6">
        <v-card>
            <v-card-text>{{tarefa.desc}}</v-card-text>
            <v-card-actions>
                <v-btn rounded text color="deep-purple accent-4" class="mx-1">
                    <v-icon left>mdi-check-bold</v-icon>
                    <span>Feito</span>
                </v-btn>
                <v-btn rounded text color="deep-purple accent-4" class="mx-1">
                    <v-icon left>mdi-trash-can-outline</v-icon>
                    <span>Excluir</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props:{
        tarefa: {type: Object, required: true}
    }
}
</script>