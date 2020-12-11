import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [
      {id: 1, desc: 'Aprender a Usar Vuex, seu burro!', feito: false},
      {id: 2, desc: 'Fazer um app de tarefas!', feito: false},
      {id: 3, desc: 'Dominar o mundo!', feito: false}
    ]
  },
  mutations:{
    novaTarefa(state, payload) {
      state.tarefas.push(payload)
    }
  }
})
