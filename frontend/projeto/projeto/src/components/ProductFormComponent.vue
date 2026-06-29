<template>


    <input v-model="produto.nome" class="form-control" placeholder="Nome">
    <input v-model="produto.preco" class="form-control" placeholder="Preço">
    <input v-model="produto.categoria" class="form-control" placeholder="Categoria">
    <textarea v-model="produto.descricao" class="form-control" placeholder="Descrição"></textarea>
    <button @click="salvar" class="btn btn-primary">
        Salvar
    </button>
</template>




<script setup>


import { reactive }

    from "vue"



import api from "../services/api"



const produto = reactive({

    nome: "",

    preco: "",

    categoria: "",

    descricao: ""


})



async function salvar() {


    await api.post(

        "/products",

        produto

    )



}



</script>