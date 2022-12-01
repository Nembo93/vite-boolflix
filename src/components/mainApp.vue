<script>
import { store } from "../store.js";
import FilmApp from "./FilmApp.vue";
export default {
    name: "mainApp",
    components:{
        FilmApp
    },
    data (){
        return{
            store,
        };
    },
    
};
</script>

<template>
    <div class="film_container">
        <FilmApp v-for="character in store.characters"/>
    </div>
</template>

<style>
.film_container{
    margin: auto;
    width: 400px;
    height: 1000px;
    background-color: aqua;
}
</style>
