<template>


    <h2>

        Previsão do tempo

    </h2>


    <button @click="buscar">

        Buscar

    </button>



    <p>

        {{ tempo }}

    </p>



</template>



<script setup>


import axios from "axios"

import { ref }

    from "vue"



const tempo = ref("")



async function buscar() {


    const res =

        await axios.get(

            "https://api.open-meteo.com/v1/forecast?latitude=-26.3&longitude=-48.8&current_weather=true"

        )



    tempo.value =

        res.data.current_weather.temperature + "°C"


}



</script>