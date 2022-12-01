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
    <div>
        <div class="film_img">
                <img :src="`https://image.tmdb.org/t/p/w185` + info.poster_path" alt="">
        </div>
        <div class="film_card">
            <h3>{{info.title}}</h3>
            <h4>{{info.original_title}}</h4>
            <h5>{{info.original_language}}</h5>
            <h6>{{info.vote_average}}</h6>
        </div>  
    </div>      
</template>

<style>
.film_img{
    width: auto;
}
.film_card{
    width: 185px;
    height: 300px;
    text-align: center;
    padding: 10px;
    background-color: red;
    border: 2px solid black;
}
</style>