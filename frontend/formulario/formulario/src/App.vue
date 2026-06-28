<template>

  <div>

    <h1>Cadastro de Usuários</h1>
    <form @submit.prevent="cadastrar">

      <label>Nome:</label>
      <br>
      <input v-model="usuario.nome" type="text">
      <br><br>
      <label>Email:</label>
      <br>
      <input v-model="usuario.email" type="email">
      <br><br>
      <label>Telefone:</label>
      <br>
      <input v-model="usuario.telefone" type="text">
      <br><br>
      <button> Cadastrar</button>

    </form>
    <h2>Usuário cadastrado</h2>

    <p>
      Nome: {{ usuario.nome }}
    </p>

    <p>n
      Email: {{ usuario.email }}
    </p>
    <p>
      Telefone: {{ usuario.telefone }}
    </p>

    <h1>Consulta CEP</h1>
    <input v-model="cep" placeholder="Digite o CEP">
    <button @click="buscarCEP">
      Buscar CEP
    </button>


    <h2>Endereço</h2>
    <p>Logradouro: {{ endereco.logradouro }}</p>
    <p>Bairro: {{ endereco.bairro }}</p>
    <p>Cidade: {{ endereco.localidade }}</p>
    <p> Estado: {{ endereco.uf }}</p>
  </div>

</template>


<script>


import axios from "axios"
export default {

  data() {
    return {
      usuario: {
        nome: "",
        email: "",
        telefone: ""
      },
      cep: "",
      endereco: {}
    }
  },
  methods: {
    cadastrar() {
      alert("Usuário cadastrado!")
    },

    buscarCEP() {
      axios.get( `https://viacep.com.br/ws/${this.cep}/json/`)

        .then(res => {
          this.endereco = res.data
        })
        .catch(() => {
          alert("Erro ao buscar CEP")
        })
    }
  }
}

</script>