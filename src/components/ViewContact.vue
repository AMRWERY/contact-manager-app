<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>View Contact</h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
    </div>
  </div>

  <!-- Loading -->
  
  <div class="container" v-if="loading">
    <div class="row">
      <div class="col">
        <loading-spinner />
      </div>
    </div>
  </div>

  <!-- Error -->

  <div v-if="!loading && errorMessage">
    <div class="container mt-7 d-block">
      <div class="row">
        <div class="col">
          <p class="error">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container" v-if="!loading && isDone()">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img :src="contact.photo">
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">Name: <span class="fw-bold">{{ contact.name }}</span></li>
          <li class="list-group-item">Email: <span class="fw-bold">{{ contact.email }}</span></li>
          <li class="list-group-item">Mobile Number: <span class="fw-bold">{{ contact.mobile }}</span></li>
          <li class="list-group-item">Company: <span class="fw-bold">{{ contact.company }}</span></li>
          <li class="list-group-item">Title: <span class="fw-bold">{{ contact.title }}</span></li>
          <li class="list-group-item">Group: <span class="fw-bold">{{ group.name }}</span></li>
        </ul>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <router-link to="/" class="btn btn-outline-primary"><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ContactServices } from '../services/ContactServices.js';
import LoadingSpinner from '@/ui/LoadingSpinner.vue';

export default {
   name: 'ViewContact',

   components: {
    LoadingSpinner
   },

   data() {
    return {
      contactId: this.$route.params.contactId,
      loading: false,
      contact: {},
      errorMessage: null,
      group: {}
    }
   },

   async created() {
    try {
      this.loading = true;
      const response = await ContactServices.getContact(this.contactId);
      const groupResponse = await ContactServices.getGroup(response.data);
      this.contact = response.data;
      this.group = groupResponse.data;
      this.loading = false;
    }
    catch(error) {
      this.errorMessage = error;
      this.loading = false;
    }
   },

   methods: {
    isDone() {
      return Object.keys(this.contact).length > 0 && Object.keys(this.group).length > 0;
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
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5)
}

.list-group {
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
}
</style>