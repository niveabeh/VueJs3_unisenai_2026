<template>

    <div>
        <h3> Mensagem do pai: {{ mensagem }}</h3>
        <button @click="enviar"> Enviar para pai</button>

    </div>

</template>

<script>

export default {

    props: [
        'mensagem'
    ],
    methods: {
        enviar() {
            this.$emit(
                'enviarMensagem',
                'Olá pai, recebi no filho'
            )
        }
    }
}

</script>