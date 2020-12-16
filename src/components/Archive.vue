<template>
<v-col cols="12" md="4" sm="6">
    <v-card color="purple lighten-3">
        <v-card-title>Tarefa Arquivada</v-card-title>
        <v-card-subtitle>Arquivada em {{data}} </v-card-subtitle>
        <v-card-text class="text-body-2 black--text font-italic text-center">{{arquivada.desc}}</v-card-text>
    </v-card>
</v-col>
</template>

<script>
export default {
    props:{
        arquivada: {type: Object, required: true}
    },
    computed:{
        data(){
            const data = this.arquivada.quando.toLocaleDateString('pt-BR', {
                day: 'numeric', month: 'long', year: 'numeric'
            })
            return data
        }
    }
}
</script>