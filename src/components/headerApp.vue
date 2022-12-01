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

        axios
            .get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: "071cb57202acff2ed1f9abd198110e68",
                    query: store.searchText,
                    language: "it-IT",
                },
            })
            .then((response) => {
            this.store.characters = response.data.results;
            console.log(store.characters)
            })

        }
    },
    
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