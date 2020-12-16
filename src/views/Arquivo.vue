<template>
  <v-container>
    <v-row>
      <Arquivo v-for="t in arquivo" :key="t.id" :arquivada="t"/>
    </v-row>
  </v-container>
</template>


<script>
import Arquivo from '../components/Archive'
export default {
  components:{
    Arquivo
  },
  computed: {
    arquivo(){
      return this.$store.state.tarefasArquivadas
    }
  }
}
</script>