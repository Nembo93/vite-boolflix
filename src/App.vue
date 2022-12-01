<script>
import {store} from "./store.js";

import headerApp from "./components/headerApp.vue";
import mainApp from "./components/mainApp.vue";

export default{
  components: {
    headerApp,
    mainApp
  },


  // methods: {
  //   provabtn: function(){
  //       console.log(store.searchText) 
  //   }
  // },

};
</script>

<template>
  <h1>App</h1>
  <headerApp />
  <mainApp />
</template>

<style>

</style>
