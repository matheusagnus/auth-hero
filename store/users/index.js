import { auth } from '~/plugins/firebase.js'

export const state = () => ({
    user: '',
  })

export const mutations = {
    SET_USER: (state, payload) => {
        state.user = payload
    }
}

export const actions = {
    async userSignIn ({ commit}, payload){
        try {
            await auth.signInWithEmailAndPassword(payload.email, payload.password).then(() => {
                this.app.router.push('/')
                commit("SET_USER", { payload });
            })
        } catch (error) {
            console.log('store: ' + error.message)
            throw error;
          }
    }
}