<script>
// File importati in headerApp.vue
import { store } from "../store.js";
// Esportazione del file headerApp
export default{
    name: "headerApp",
    data(){
        return{
            store,
        };
    },

    // Funzione bottone search
    // methods:{
    // prova: function(){
    //     console.log(store.searchText)
    //     }
    // },
};

</script>

<template>
    <header>
        <div>
            <h1>Boolflix</h1>
        </div>

        <div>
            <input type="text" v-model="store.searchText">
            <button @click="$emit(`prova`)">Cliccami</button>
        </div>
        

    </header>
</template>

<style>
</style>