<template>

  <div>

    <h1>{{ mensagem }}</h1>
    <button @click="alterarMensagem">Alterar mensagem</button>
    <hr>
    <h2>Contador</h2>

    <p>{{ contador }}</p>

    <button @click="contador++"> +</button>

    <button @click="contador--">-</button>


    <hr>


    <h2>Cadastro de usuário</h2>
    <input v-model="usuario.nome" placeholder="Nome">
    <br>
    <input v-model="usuario.email" placeholder="Email">
    <br>


    <select v-model="usuario.cidade">
      <option>Joinville</option>
      <option>Curitiba </option>

    </select>


    <h3>Dados:</h3>
    <p>   Nome: {{ usuario.nome }}</p>

    <p> Email: {{ usuario.email }}</p>
    <p> Cidade: {{ usuario.cidade }} </p>

    <hr>
    <h2>Lista de tarefas</h2>
    <input v-model="novaTarefa" placeholder="Nova tarefa">
    <button @click="adicionarTarefa">
      Adicionar
    </button>
    <ul>
      <li v-for="(tarefa, index) in tarefas" :key="index">
        {{ tarefa }}
        <button @click="removerTarefa(index)">X</button>
      </li>
    </ul>



    <hr>

    <h2>Produtos</h2>
    <table border="1">

      <tr>
        <th>Nome</th>
        <th> Preço</th>
      </tr>
      <tr v-for="produto in produtos" :key="produto.id">
        <td> {{ produto.nome }}</td>
        <td><input v-model="produto.preco"> </td>
      </tr>
    </table>
  </div>
</template>



<script>

export default {

  data() {
    return {
      mensagem:"Olá, Vue.js!",
      contador: 0,
      usuario: {
        nome: "",
        email: "",
        cidade: ""
      },
      novaTarefa: "",
      tarefas: [
        "Estudar Vue",
        "Fazer exercícios"
      ],
      produtos: [
        {
          id: 1,
          nome: "Notebook",
          preco: 3000
        },
        {
          id: 2,
          nome: "Mouse",
          preco: 100
        }
      ]
    }
  },
  methods: {
    alterarMensagem() {
      this.mensagem ="Mensagem alterada!"
    },
    adicionarTarefa() {
      if (this.novaTarefa) {
        this.tarefas.push(
          this.novaTarefa
        )
        this.novaTarefa = ""
      }
    },
    removerTarefa(index) {
      this.tarefas.splice(index, 1)
    }
  },
  mounted() {
    console.log(
      "Componente carregado!"
    )
    setTimeout(() => {
      console.log(
        "Requisição concluída"
      )
    }, 2000)
  }
}
</script>