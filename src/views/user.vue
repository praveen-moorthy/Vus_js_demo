<template >
   <h2>The user name is : {{name}}</h2>
    <h2>The user name is : {{$route.params.name}}</h2>
</template> 

<script lang="ts">
export default {
  props : ['name'],
};
</script>