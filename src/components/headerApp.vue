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
};


</script>

<template>
    <header>
        <div>
            <h1>Boolflix</h1>
        </div>

        <div>
            <input type="text" v-model="store.searchText">
            <button>Cliccami</button>
        </div>
        

    </header>
</template>

<style>
</style>