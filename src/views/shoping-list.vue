<template >
<div class="col-md-3">
   <h2>shoping-list</h2>
   <input class="form-input" v-model="itemName" type="text" />
   <button @click="addItem()" class="btn btn-primary">Add Item</button>
   <ul class="list-group">
    <li class="list-group-item" v-for="item of items" :key="item.id">
      {{item.name}} <i class="material-icons pull-right" @click="deleteItem(item.id)">delete</i>
    </li>
   </ul>
   </div>
</template> 

<script lang="ts">
import axios from "axios";

export default {
  name: "shoping-list",
  data(){
    return {
      items:[],
      itemName:[],
    }
  },
  async created(){
    const res = await axios.get('http://localhost:3000/items');
    this.items = res.data;
  },
  methods:{
    async addItem() {
      const res = await axios.post('http://localhost:3000/items',{
        name: this.itemName,
      });
      this.items = [...this.items, res.data];
      this.itemName='';
    },
    async deleteItem(id) {
      const res =  axios.delete('http://localhost:3000/items/'+id);
        this.items = this.items.filter((item) => item.id !== id);
    },
  }
}


</script>