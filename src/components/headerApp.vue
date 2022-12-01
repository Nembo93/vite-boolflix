<script>
// File importati in headerApp.vue
import { store } from "../store.js";
import axios from "axios";
// Esportazione del file headerApp
export default{
    name: "headerApp",
    data(){
        return{
            store,
        };
    },

    // Funzione bottone search
    methods:{
    prova: function(){
        console.log(store.searchText)
        console.log(store.characters)
        },
    },

    mounted() {
        axios
            .get('https://www.breakingbadapi.com/api/characters')
            .then((response) => {
            this.store.characters = response.data;
            console.log(store.characters)
            })
        }
    
};
</script>

<template>
    <header>
        <div>
            <h1>Boolflix</h1>
        </div>

        <div>
            <input type="text" v-model="store.searchText">
            <button @click="prova">Cliccami</button>
        </div>
    </header>
</template>

<style>
</style>