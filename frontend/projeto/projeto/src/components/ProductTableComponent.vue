<template>


    <table class="table">


        <tr>

            <th>
                Nome
            </th>

            <th>
                Preço
            </th>

            <th>
                Categoria
            </th>

            <th>
                Descrição
            </th>

            <th>
                Ações
            </th>


        </tr>




        <tr v-for="produto in produtosFiltrados" :key="produto.id">


            <td>

                {{ produto.nome }}

            </td>



            <td>

                {{ produto.preco }}

            </td>



            <td>

                {{ produto.categoria }}

            </td>



            <td>

                {{ produto.descricao }}

            </td>



            <td>



                <button class="btn btn-warning" @click="editar(produto)">

                    Editar

                </button>



                <button class="btn btn-danger" @click="remover(produto.id)">

                    Excluir

                </button>



            </td>



        </tr>



    </table>


</template>





<script setup>


import {ref, computed, onMounted, defineEmits, defineExpose} from "vue"


import api from "../services/api"



// envia produto para o componente pai

const emit = defineEmits([

    "editarProduto"

])



const produtos = ref([])



const busca = ref("")




// BUSCAR

async function buscarProdutos() {


    try {


        const resposta = await api.get("/products")


        produtos.value = resposta.data



    } catch (error) {


        console.log(error)

        alert("Erro ao carregar produtos")


    }



}




// FILTRO

const produtosFiltrados = computed(() => {


    return produtos.value.filter(produto =>


        produto.nome

            .toLowerCase()

            .includes(

                busca.value.toLowerCase()

            )


    )


})




// EDITAR

function editar(produto) {


    emit(

        "editarProduto",

        produto

    )



}




// EXCLUIR

async function remover(id) {



    try {


        await api.delete(

            `/products/${id}`

        )



        alert("Produto removido")



        buscarProdutos()



    } catch (error) {


        alert("Erro ao excluir")


    }


}





onMounted(() => {


    buscarProdutos()


})





defineExpose({

    buscarProdutos

})



</script>