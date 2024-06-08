import { createStore } from 'vuex'

export default createStore({
  state: {
    juegos: []
  },
  getters: {
  },
  mutations: {
    SET_JUEGOS(state, juegos) {
      state.juegos = juegos
    },
    INCREMENTAR(state, index) {
      return state.juegos[index].stock++
    },

    DISMINUIR(state, index) {
      return state.juegos[index].stock--
    },

  },
  actions: {
    async setJuegos(context) {
      console.log(context)
      try {
        let response = await fetch("/juegos.json");
        let data = await response.json();
        context.commit('SET_JUEGOS', data)

      } catch (error) {
        console.log(error)
      }
    },
    incrementar(context, codigo) {
      try {
        let index = context.state.juegos.findIndex((juego) => juego.codigo == codigo)
        context.commit('INCREMENTAR', index)
      } catch (error) {
        console.log(error)
      }

    },
    onDisminuir(context, codigo) {

      try {
        let index = context.state.juegos.findIndex((juego) => juego.codigo == codigo)
        context.commit('DISMINUIR', index)
      } catch (error) {
        console.log(error)
      }

    }


  },
  modules: {
  }

}
)
