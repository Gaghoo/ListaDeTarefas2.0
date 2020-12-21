<template>
  <v-container>
    <div class="d-flex justify-center align-center ajuste">
      <v-btn
        rounded
        class="ma-1"
        color="deep-purple accent-4"
        @click="tarefaDialog = true"
        dark
      >
        <v-icon left>
          mdi-file-edit-outline
        </v-icon>
        <span>Nova Tarefa</span>
      </v-btn>
      <v-btn
        rounded
        class="ma-1"
        color="deep-purple accent-4"
        @click="anotacaoDialog = true"
        dark
      >
        <v-icon left>
          mdi-paperclip
        </v-icon>
        <span>Nova Anotação</span>
      </v-btn>
      <v-dialog
        v-model="tarefaDialog"
        max-width="500"
      >
        <AddTodo/>
      </v-dialog>
      <v-dialog
        v-model="anotacaoDialog"
        max-width="700"
      >
        <TakeNote/>
      </v-dialog>
    </div>
  </v-container>
</template>


<script>
import AddTodo from '@/components/AddTodo.vue'
import TakeNote from '@/components/TakeNote.vue'
export default {
  components:{
    AddTodo,
    TakeNote
  },
  data: ()=>({
    tarefaDialog: false,
    anotacaoDialog: false
  })
}
</script>

<style scoped>
  .container{
    height: calc(100vh - 48px);
  }
  .ajuste{
    height: 100%;
  }
</style>