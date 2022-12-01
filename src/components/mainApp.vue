<script>
import { store } from "../store.js";

export default {
    name: "mainApp",
    data (){
        return{
            store,
        };
    },
    
};
</script>

<template>
    <div v-for="character in store.characters">{{`ciao`}}</div>
    <h2>prova</h2>
</template>

<style>

</style>
