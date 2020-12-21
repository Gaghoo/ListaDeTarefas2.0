<template>
  <v-card
    shaped
    color="deep-purple lighten-5"
  >
    <v-card-title>
      <div class="d-flex justify-center align-center text-h4 ajuste">Nova Anotação</div>
    </v-card-title>
    <v-card-text>
      <v-text-field
        label="Titulo da anotação"
        color="deep-purple accent-4"
        v-model="nota.titulo"
      />
      <v-divider class="ma-2"/>
      <v-textarea
        label="Descrição"
        color="deep-purple accent-4"
        outlined
        background-color="deep-purple lighten-3"
        filled
        auto-grow
        rows="4"
        row-height="35"
        v-model="nota.desc"
      />
    </v-card-text>
    <v-card-actions>
      <v-btn 
        rounded
        color="deep-purple accent-4"
        dark
        class="mr-3"
        @click="salvarNota"
      >
        <span>Salvar anotação</span>
      </v-btn>
      <v-btn 
        rounded
        color="deep-purple accent-4"
        dark
        class="mr-3"
      >
        <span>Limpar Campos</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
export default {
  data: () => ({
    nota: []
  }),

  methods:{
    salvarNota(){
      this.$store.dispatch('novaAnotacao', this.nota)
      this.nota.desc = ''
      this.nota.titulo = ''
    }
  }

}
</script>

<style scoped>
.ajuste{
  width: 100%;
  font-family: 'Courier New', Courier, monospace;
}
</style>