<template>
  <v-container>
    <v-row justify="center">
      <v-dialog
        max-width="50%"
        v-model="dialog"
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="deep-purple accent-4"
            dark
            v-bind="attrs"
            v-on="on"
            large
            rounded
          >
            Adicionar Tarefa
            <v-icon right >mdi-file-plus-outline</v-icon>
          </v-btn>
        </template>
        <v-card shaped>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" sm="4">
                <v-text-field
                  label="Nova Tarefa"
                  color="deep-purple accent-4"
                  v-model="tarefa"
                  @click:append="novaTarefa"
                  @keyup.enter="novaTarefa"
                  outlined
                  append-icon="mdi-plus"
                  class="pa-2"
                  clearable
                  counter
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data: ()=>({
    dialog: false
  })
}
</script>