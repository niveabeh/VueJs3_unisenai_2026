<template>

    <div class="container">
        <h2>Cadastro</h2>
        <input v-model="nome" class="form-control" placeholder="nome">
        <input v-model="email" class="form-control" placeholder="email">
        <input v-model="senha" class="form-control" placeholder="senha">
        <button @click="cadastrar" class="btn btn-success">Cadastrar</button>
    </div>
</template>



<script setup>


import { ref } from "vue"
import { useRouter } from "vue-router"
import api from "../services/api"

const nome = ref("")
const email = ref("")
const senha = ref("")
const router = useRouter()
async function cadastrar() {

    try {


        await api.post("/auth/register",
            {
                nome: nome.value,
                email: email.value,
                senha: senha.value
            }
        )
        router.push('/login')

    } catch (error) {
        console.error(error);
    }

}

</script>