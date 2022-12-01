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
    <div v-for="character in store.characters">{{store.charachter}}</div>
</template>

<style>

</style>
