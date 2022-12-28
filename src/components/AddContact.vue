<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>Add Contact</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="submitForm">
          <div class="mb-2">
            <input required v-model="contact.name" type="text" class="form-control" placeholder="Name">
          </div>
          <div class="mb-2">
            <input required v-model="contact.photo" type="text" class="form-control" placeholder="Photo URl">
          </div>
          <div class="mb-2">
            <input required v-model="contact.email" type="email" class="form-control" placeholder="Email">
          </div>
          <div class="mb-2">
            <input required v-model="contact.mobile" type="number" class="form-control" placeholder="Mobile">
          </div>
          <div class="mb-2">
            <input required v-model="contact.company" type="text" class="form-control" placeholder="Company">
          </div>
          <div class="mb-2">
            <input required v-model="contact.title" type="text" class="form-control" placeholder="Title">
          </div>
          <div class="mb-2">
            <select required v-model="contact.groupId" class="form-control" v-if="groups.length > 0">
              <option>Select Group</option>
              <option :value="group.id" v-for="group in groups" :key="group.id">{{ group.name }}</option>
            </select>
          </div>
          <div class="mb-2">
            <button type="submit" class="btn btn-outline-danger">Create</button>
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img :src="contact.photo">
      </div>
    </div>
  </div>
</template>

<script>
import { ContactServices } from '../services/ContactServices.js';

export default {
   name: 'AddContact',

   data() {
    return {
      contact: {
        name: '',
        company: '',
        email: '',
        title: '',
        mobile: '',
        photo: '',
        groupId: ''
      },
      groups: []
    }
   },

   async created() {
    try {
      const response = await ContactServices.getAllGroups();
      this.groups = response.data;
    }
    catch(error) {
      console.log(error)
    }
   },

   methods: {
    async submitForm() {
      try {
        const response = await ContactServices.createContact(this.contact)
        if (response) {
          return this.$router.push('/')
        }
      }
      catch(error) {
        console.log(error)
      }
    }
   },
}
</script>

<style scoped>
  .container {
    margin-top: 3%;
  }

  h3 {
    color: blue;
  }

  p {
    font-style: italic;
  }

  img {
    width: 200px;
    border-radius: 50%;
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  }
</style>