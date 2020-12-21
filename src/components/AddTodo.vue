<template>
    <v-card outlined class="mx-auto pa-0" elevation="10" color="deep-purple lighten-5">
        <v-card-actions>
            <!-- <v-form 
                ref="from"
                v-model="valid"
                lazy-validation
            >
                <v-text-field
                    color="deep-purple accent-4"
                    label="Nova Tarefa"
                    v-model="tarefa"
                    outlined
                    append-icon="mdi-plus"
                    clearable
                    shaped
                    counter
                    required
                    :rules="regraTarefa"
                    @click:append="novaTarefa, validate"
                    @keyup.enter="novaTarefa, validate"
                    ></v-text-field>
            </v-form> --><v-text-field
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
        // inicId: 1,
        // regraTarefa: [
        //     v => !!v || 'Descrição necessária'
        // ]
        // rules: {
        //     required: value => !!value || 'required!!'
        // }
    }),
    methods:{
        novaTarefa(){
            // const tarefa = {
            //     id: this.inicId,
            //     desc: this.tarefa,
            //     feito: false
            // }
            // // if (this.tarefa.length >= 5) {
            // //     false
            // // }
            // if(this.tarefa.length > 0){
            //     this.inicId++
            //     this.tarefa = ''
            
            //     this.$store.commit('novaTarefa', tarefa)
            // }
            this.$store.dispatch('novaTarefa', this.tarefa)
            this.tarefa = ''
        },
        // validate(){
        //     this.$refs.form.validate()
        // }
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