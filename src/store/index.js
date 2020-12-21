import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [],
    tarefasArquivadas:[],
    inicId: 1,
    anotacoes: []
  },
  mutations:{
    novaTarefa(state, payload) {
      state.tarefas.push(payload)
      state.inicId++
      console.log(state.inicId)
    },
    novaAnotacao(state, payload){
      state.anotacoes.push(payload)
      console.log(state.anotacoes)
    },
    marcarComoFeito(state, payload){
      const index = state.tarefas.findIndex(item => item.id === payload.id)
      if (index > -1) {
        const feito = !state.tarefas[index].feito
        Vue.set(state.tarefas, index, {...state.tarefas[index], feito})
      }
      // console.log(state.tarefas[index])
    },
    arquivarTarefa(state, payload) {
      state.tarefasArquivadas.push(payload)
    },
    removerTarefa(state, payload){
      const index = state.tarefas.findIndex(item => item.id === payload.id)
      if (index > -1) {
        state.tarefas.splice(index, 1)
      }
      // console.log('Tarefas: ',state.tarefas)
      // console.log('Arquivo: ',state.tarefasArquivadas)
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
    novaAnotacao({commit}, payload){
      const anotacao = {
        titulo: payload.titulo,
        desc: payload.desc,
        quando: new Date(),
      }
      if(anotacao.titulo.length > 0 || anotacao.desc.length > 0){
        setTimeout(() => {
          commit('novaAnotacao', anotacao)
          console.log(anotacao)
        }, 1000);
      }
    },
    marcarComoFeito({commit}, payload){
      commit('marcarComoFeito', payload)
    },
    arquivarTarefa({commit}, payload){
      const tarefaArquivada = payload
      const quando = new Date()
      tarefaArquivada.quando = quando
      // console.log(tarefaArquivada.id)
      commit('arquivarTarefa', tarefaArquivada)
      commit('removerTarefa', payload)
    }
  }
})
