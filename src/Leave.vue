<template>
  <div class="container">
    <div>
      <h1>Leave Manager</h1>
    </div>
    <div id="nav">
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/leavehome">Home</router-link>&nbsp;
        </li>
        <li>
          <router-link :to="{ name: 'leaverequest' }">Leave Request</router-link>&nbsp;
        </li>
        <li>
          <router-link :to="{ name: 'report' }">Report</router-link>&nbsp;
        </li>
        <li>
          <router-link :to="{ name: 'config' }">Configuration</router-link>&nbsp;
        </li>
        <li>
          <router-link :to="{ name: 'user-guide' }">User Guide</router-link>&nbsp;
        </li>
      </ul>
    </div>
    <router-view /><!-- router-view to make it viables-->
  </div>
</template>


<!-- <script setup lang="ts">
</script>
export default {
  name : 'App',
  components : {

  },
}
</script> -->