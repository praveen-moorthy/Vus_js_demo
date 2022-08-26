<template>
<div id="nav" align="center">
  <!-- router-link to create view-->
  <router-link to="/">Home</router-link>&nbsp;
  <router-link :to="{ name: 'About'}">About</router-link>&nbsp;
  <router-link :to="{ name: 'shoping-list'}">Shoping List</router-link>&nbsp;
 
</div>
<router-view/><!-- router-view to make it viables-->
</template>


<!-- <script setup lang="ts">
</script>
export default {
  name : 'App',
  components : {

  },
}
</script> -->