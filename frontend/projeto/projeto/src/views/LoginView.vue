<template>


    <div class="container mt-5">
        <h2>Login</h2>
        <input v-model="email" class="form-control" placeholder="Email">
        <input v-model="senha" class="form-control" placeholder="Senha" type="password">
        <button @click="login" class="btn btn-primary mt-3">Entrar</button>
    </div>



</template>



<script setup>


import { ref } from "vue"
import { useRouter } from "vue-router"
import api from "../services/api"



import { useAuthStore } from "../stores/auth"



const email = ref("")
const senha = ref("")
const auth = useAuthStore()
const router = useRouter()

async function login() {
    try {
        const res =
            await api.post(
                "/auth/login", {
                email: email.value,
                senha: senha.value
            }
            )
        auth.login(res.data.token)
        router.push('/dashboard')

    } catch (error) {
        console.error(error);
    }

}



</script>