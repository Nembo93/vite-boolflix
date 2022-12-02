<script>
import { store } from "../store.js";
import FilmApp from "./FilmApp.vue";
import SeriesApp from "./SeriesApp.vue"
export default {
    name: "mainApp",
    components:{
        FilmApp,
        SeriesApp
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
        <FilmApp v-for="character in store.characters"
        :info="character"/>
        <h2>prova</h2>
        <h1>prova2</h1>
    </div>

    <div class="series_container">
        <h2>Serie TV</h2>
        <SeriesApp v-for="serie in store.series"
        :info="serie"/>
    </div>
</template>

<style>
.film_container{
    margin: auto;
    background-color: aqua;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
}
.series_container{
    margin: auto;
    background-color: yellow;
}
</style>
