<template>
  <div>

    <table border="1">
      <tr>
        <th>ID</th>
        <th>Nome</th>
      </tr>

      <tr v-for="usuario in usuarios" :key="usuario.id">
        <td>{{ usuario.id }}</td>
        <td>{{ usuario.nome }}</td>
      </tr>
    </table>

    <br>

    <input v-model="novo.nome" placeholder="Nome">

    <button @click="adicionar">
      Adicionar
    </button>

    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        {{ usuario.nome }}

        <button @click="remover(usuario.id)">
          Excluir
        </button>
      </li>
    </ul>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      usuarios: [],
      novo: {
        nome: ""
      }
    };
  },

  methods: {
    carregarUsuarios() {
      axios.get("http://localhost:3000/usuarios")
        .then(res => {
          this.usuarios = res.data;
        });
    },

    adicionar() {
      axios.post("http://localhost:3000/usuarios", this.novo)
        .then(() => {
          this.novo.nome = "";
          this.carregarUsuarios();
        });
    },

    remover(id) {
      axios.delete(`http://localhost:3000/usuarios/${id}`)
        .then(() => {
          this.carregarUsuarios();
        });
    }
  },

  mounted() {
    this.carregarUsuarios();
  }
};
</script>