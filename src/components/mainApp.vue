<script>
import { store } from "../store.js";

export default {
    name: "mainApp",
    data (){
        return{
            store,
            msg: "ciao",
        };
    },

};
</script>

<template>
    <!-- <div v-for="character in store.characters">{{}}</div> -->
</template>

<style>

</style>
