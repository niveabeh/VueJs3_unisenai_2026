<template>


    <nav class="navbar navbar-dark bg-dark">


        <a class="navbar-brand ms-3">

            E-commerce

        </a>

        <router-link to="/login" class="btn btn-light">

            Login

        </router-link>
        <router-link to="/register" class="btn btn-light">

            Registrar

        </router-link>

        <router-link to="/dashboard" class="btn btn-light">

            Produtos

        </router-link>

        <button class="btn btn-danger" @click="sair">

            Sair

        </button>


    </nav>


</template>

<script setup>


import { useRouter } from "vue-router"



const router = useRouter()

function sair() {
    localStorage.removeItem("token")
    router.push("/login")
}



</script>