import { defineStore } from "pinia"


//gerando o token 
export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: localStorage.getItem("token")
    }),

    actions: {
        login(token) {
            this.token = token
            localStorage.setItem(
                "token",
                token
            )
        },
        logout() {
            this.token = null
            localStorage.removeItem("token")
        }
    }
})