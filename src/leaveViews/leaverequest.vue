<template>

   <form v-on:submit.prevent="submitForm">
      <div class="form-row">
         <div class="form-group col-md-12">
            <label for="name">Name</label>
            <input v-model="request.name" class="form-control" id="name" placeholder="Name" required>
         </div>
      </div>
      <div class="form-row">
         <div class="form-group col-md-12">
            <label for="email">Email</label>
            <input v-model="request.email" class="form-control" id="email" type="email" placeholder="Email" required>
         </div>
      </div>
      <div class="form-row">
         <div class="form-group col-md-6">
            <label for="startdate">start date</label>
            <input v-model="request.startdate" class="form-control" id="startdate" type="date" placeholder="Start Date">
         </div>
         <div class="form-group col-md-6">
            <label for="enddate">End date</label>
            <input v-model="request.enddate" class="form-control" id="enddate" type="date" placeholder="End Date">
         </div>
      </div>
      <div class="form-row">
         <div class="form-group">
            <div class="form-group col-md-12">
               <label for="reason">Reason</label>
               <textarea v-model="request.reason" class="form-control"></textarea>
            </div>
         </div>
      </div>
      <div class="form-row"></div>
      <div class="form-row"></div>
      <div class="form-row">
         <div class="form-group">
            <button type="submit" class="form-control btn btn-primary">Apply</button>
         </div>
      </div>

   </form>

</template>

<script>
import axios from "axios";

export default {
   name: "shoping-list",
   data() {
      return {
         request: {
            name: '',
            email: '',
            startdate: '',
            enddate: '',
            reason: ''
         }
      }
   },
   methods: {
      submitForm() {
         console.log()
         axios.post('http://localhost:3000/requests', this.request)
            .then((res) => {
               //Perform Success Action               

            })
            .catch((error) => {
               // error.response.status Check status code
            }).finally(() => {
               //Perform action in always
            });
      },
   }
}
</script>