import { createStore }from 'vuex'
export default createStore({    
    state: {
        usuario: "Nivea"
    },
    mutations: {
        alterarUsuario(state, nome) {
            state.usuario = nome
        }
    }
})