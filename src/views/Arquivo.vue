<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" sm="6" v-for="tarefa in arquivo" :key="tarefa.id">
        <v-card color="purple lighten-3">
          <v-card-title>Tarefa Arquivada</v-card-title>
          <v-card-subtitle>Arquivada em {{tarefa.quando.getDate()}} / {{tarefa.quando.getMonth() + 1}}</v-card-subtitle>
          <v-card-text class="text-body-2 black--text font-italic text-center">{{tarefa.desc}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  computed: {
    arquivo(){
      return this.$store.state.tarefasArquivadas
    }
  },
  data: ()=>({
    mes: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"]
  })
}
</script>