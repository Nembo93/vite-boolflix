<script>
import { store } from '../store';

export default{
    name : "FilmApp",
    props:{
        info: Object,
    },
    data (){
        return{
            store
        };
    },
}
</script>

<template>
    <div class="film_card">
        <h3>{{info.title}}</h3>
        <h4>{{info.original_title}}</h4>
        <h5>{{info.original_language}}</h5>
        <h6>{{info.vote_average}}</h6>
    </div>    
</template>

<style>
.film_card{
    background-color: red;
    border: 2px solid black;
}
</style>