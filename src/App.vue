<script>
import headerApp from "./components/headerApp.vue";
import mainApp from "./components/mainApp.vue";

export default{
  components: {
    headerApp,
    mainApp
  },


  methods: {
    provabtn: function(){
        console.log("Ciao") 
    }
  },

};
</script>

<template>
  <h1>App</h1>
  <headerApp @prova="provabtn" />
  <mainApp />
</template>

<style>

</style>
