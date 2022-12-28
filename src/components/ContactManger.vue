<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h4>Contact Manger
          <router-link to="/contact/add" type="button" class="btn btn-outline-danger"><i class="fa fa-plus-circle"></i> New</router-link>
        </h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
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

  <div class="container mt-3" v-if="contacts.length > 0">
    <div class="row">
      <div class="col-md-6" v-for="contact in contacts" :key="contact">
        <div class="card my-2">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-4">
                <img :src="contact.photo">
              </div>
              <div class="col-sm-7 mt-2 d-block">
                <ul class="list-group">
                  <li class="list-group-item">Name: <span class="fw-bold">{{ contact.name }}</span></li>
                  <li class="list-group-item">Email: <span class="fw-bold">{{ contact.email }}</span></li>
                  <li class="list-group-item">Mobile Number: <span class="fw-bold">{{ contact.mobile }}</span></li>
                </ul>
              </div>
              <div class="col-sm-1 flex-column ">
                <router-link :to="`/contact/view/${contact.id}`" class="btn btn-warning my-1"><i class="fa fa-eye"></i></router-link>
                <router-link :to="`/contact/edit/${contact.id}`" class="btn btn-primary my-1"><i class="fa fa-pen"></i></router-link>
                <button @click="deleteContact(contact.id)" class="btn btn-danger my-1"><i class="fa fa-trash"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ContactServices } from '../services/ContactServices.js';
import LoadingSpinner from '@/ui/LoadingSpinner.vue';

export default {
   name: 'ContactManger',

   components: {
    LoadingSpinner
   },

   data() {
    return {
      loading: false,
      contacts: [],
      errorMessage: null,
    }
   },

   async created() {
    try {
      this.loading = true;
      const response = await ContactServices.getAllContacts()
      this.contacts = response.data;
      this.loading = false;
    }
    catch(error) {
      this.errorMessage = error;
      this.loading = false;
    }
   },

   methods: {
   async deleteContact(contactId) {
    try {
      this.loading = true;
      const response = await ContactServices.deleteContact(contactId);
      if (response) {
        const response = await ContactServices.getAllContacts()
        this.contacts = response.data;
        this.loading = false;
      }
    }
    catch(error) {
      console.log(error)
    }
   },
 },
}
</script>

<style scoped>
  .container {
    margin-top: 3rem;
  }

  h4 {
    color: blue;
  }

  p {
    font-style: italic;
  }

  .card {
    background-color: #A4BE7B;
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  }

  img {
    width: 150px;
    border-radius: 50%;
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  }

  li {
    list-style: none;
  }

  .col-sm-1 {
    display: flex;
    align-items: center;
  }

  .error {
    color: red;
    font-size: 30px;
  }
</style>