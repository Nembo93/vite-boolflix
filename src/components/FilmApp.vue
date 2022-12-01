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
    <h4>{{info.title}}</h4>
</template>

<style></style>