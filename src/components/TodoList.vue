<template>
    <v-col cols="12" md="4" sm="6">
        <v-card 
            :elevation="tarefa.feito ? '0' : '5'"
            :color="tarefa.feito ? 'grey lighten-3' : ''"
        >
            <v-card-text 
                :class="tarefa.feito ? 'font-italic text-decoration-line-through' : 'black--text font-weight-bold'"
            >
                {{tarefa.desc}}
            </v-card-text>
            <v-card-actions>
                <v-btn 
                    rounded 
                    text 
                    :color="tarefa.feito? 'purple lighten-4' : 'deep-purple accent-4'" 
                    class="mx-1" 
                    @click="feito"
                >
                    <v-icon left v-if="tarefa.feito">mdi-window-close</v-icon>
                    <v-icon left v-else>mdi-check-bold</v-icon>
                    <span>Feito</span>
                </v-btn>
                <v-btn 
                    rounded 
                    text 
                    class="mx-1" 
                    :color="tarefa.feito? 'deep-purple accent-4' : 'purple lighten-4'"
                    :disabled="!tarefa.feito"
                    @click="arquivar"
                >
                    <v-icon left>mdi-file-cabinet</v-icon>
                    <span>Arquivar</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props:{
        tarefa: {type: Object, required: true}
    },
    methods:{
        feito(){
            this.$store.dispatch('marcarComoFeito',this.tarefa)
        },
        arquivar(){
            this.$store.dispatch('arquivarTarefa',this.tarefa)
        }
    }
}
</script>