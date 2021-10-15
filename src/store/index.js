import { createStore } from 'vuex'

export default createStore({
  state: {
    paises:[],//para filtrar todos los paises
    paisesFiltrados: [],//para filtrar por continente o por busqueda de usuario
  },
  mutations: {
    setPaises(state, payload){
      state.paises = payload
    },
    setPaisesFiltrados(state, payload){
      state.paisesFiltrados = payload
    }
  },
  actions: {
    async getPaises({commit}){
      try {
        const res = await fetch('api.json')
        const data = await res.json()
        //console.log(data)
        commit('setPaises', data)
      } catch (error) {
        console.log(error)
      }
    },
    filtrarContinente({commit, state}, region ){
      //const filtrar = state.paises.filter(pais => pais.region === region)
      const filtro = state.paises.filter(pais => pais.region.includes(region))
      commit('setPaisesFiltrados', filtro)
    },
    filtroNombre({commit, state}, texto){
      //textocliente representa el texto que se ingresa en el input para buscar
      const textoCliente = texto.toLowerCase()

      const filtro = state.paises.filter(pais => {

        const textoAPI = pais.name.common.toLowerCase()
          if (textoAPI.includes(textoCliente)) {
          return pais
        }
      })
      commit('setPaisesFiltrados', filtro)
      }
  },
  getters:{
    topPaisesPoblacion(state){
      return state.paisesFiltrados.sort((a,b) =>
      a.population < b.population ? 1 : -1)
    }
  },
  modules: {
  }
})
