import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [],
    inicId: 1
  },
  mutations:{
    novaTarefa(state, payload) {
      state.tarefas.push(payload)
      state.inicId++
      console.log(state.inicId)
    },
    marcarComoFeito(state, payload){
      const index = state.tarefas.findIndex(item => item.id === payload.id)
      if (index > -1) {
        const feito = !state.tarefas[index].feito
        Vue.set(state.tarefas, index, {...state.tarefas[index], feito})
      }
      console.log(state.tarefas[index])
    }
  },
  actions:{
    novaTarefa({commit}, payload){
      const tarefa ={
        id: this.state.inicId,
        desc: payload,
        feito: false
      }
      if(payload.length > 0){
        setTimeout(() => {
          commit('novaTarefa', tarefa)
        }, 500);
      }
    },
    marcarComoFeito({commit}, payload){
      commit('marcarComoFeito', payload)
    }
  }
})
