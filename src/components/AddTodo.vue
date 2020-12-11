<template>
    <v-card outlined class="mx-auto pa-0" elevation="10">
        <v-card-actions>
                <v-text-field
                    label="Nova Tarefa"
                    color="deep-purple accent-4"
                    v-model="tarefa"
                    @click:append="novaTarefa"
                    @keyup.enter="novaTarefa"
                    outlined
                    append-icon="mdi-plus"
                    shaped
                    class="pa-2"
                    clearable
                    counter
                >
                </v-text-field>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data: ()=>({
        tarefa: '',
        inicId: 1,
        // rules: {
        //     required: value => !!value || 'required!!'
        // }
    }),
    methods:{
        novaTarefa(){
            const tarefa = {
                id: this.inicId,
                desc: this.tarefa,
                feito: false
            }
            // if (this.tarefa.lenght >= 5) {
            //     false
            // }
            this.inicId++
            this.tarefa = ''

            this.$store.commit('novaTarefa', tarefa)
        }
    },
    // computed:{
    //     required (value){
    //         if(value.length <= 5){
    //             return 'Minimo 5 letras'
    //         }else{
    //             return true
    //         }/
    //     }
    // }
}
</script>