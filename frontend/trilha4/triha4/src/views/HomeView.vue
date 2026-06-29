<template>

    <div>
        <h1>Home</h1>
        <FilhoComponent mensagem="Mensagem enviada pelo pai" @enviarMensagem="receber" />
        <p>Resposta:  {{ resposta }}</p>
        <hr>
        <CardComponent>
            <p>  Conteúdo vindo do pai pelo slot </p>
        </CardComponent>
        <hr>
        <FormularioComponent>
            <template #titulo>
                <h3> Cadastro de usuário</h3>
            </template>
            <template #campo>
                <input placeholder="Nome">
                <input placeholder="Email">
            </template>
        </FormularioComponent>
        <hr>
        <h2>
            Produtos
        </h2>

        <ul>
            <li v-for="produto in produtos" :key="produto.id">
                {{ produto.nome }}
            </li>
        </ul>
    </div>


</template>


<script>


import FilhoComponent from '../components/FilhoComponent.vue'
import CardComponent from '../components/CardComponent.vue'
import FormularioComponent from '../components/FormularioComponent.vue'


export default {

    components: {
        FilhoComponent,
        CardComponent,
        FormularioComponent

    },
    data() {
        return {
            resposta: "",
            produtos: [
                {
                    id: 1,
                    nome: "Notebook"
                },
                {
                    id: 2,
                    nome: "Mouse"
                }
            ]
        }
    },
    methods: {
        receber(msg) {
            this.resposta = msg
        }
    }

}
    
</script>