
<template >
<div class="col-md-12">
   <h2>Request list</h2>

   <table class="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>start Date</th>
        <th>End date</th>
        <th>Reason</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item of items" :key="item.id">
        <td>{{item.name}}</td>
        <td>{{item.email}}</td>
        <td>{{item.startdate}}</td>
        <td>{{item.enddate}}</td>
        <td>{{item.reason}}</td>
      </tr>
    </tbody>
  </table>
   </div>
</template> 

<script lang="ts">
import axios from "axios";

export default {
  name: "list",
  data(){
    return {
      items:[],
      itemName:[],
    }
  },
  async created(){
    const res = await axios.get('http://localhost:3000/requests');
    this.items = res.data;
  },
}




</script>