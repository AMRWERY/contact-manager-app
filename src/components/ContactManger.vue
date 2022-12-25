<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h4>Contact Manger
          <router-link to="/contact/add" type="button" class="btn btn-outline-danger"><i class="fa fa-plus-circle"></i> New</router-link>
        </h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
        <form>
          <div class="row">
            <div class="col-md-3">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <div class="col">
              <button type="submit" class="btn btn-outline-dark">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <h1>{{ contacts }}</h1>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <div class="card my-2">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-4">
                <img src="../assets/user.png">
              </div>
              <div class="col-sm-7 mt-2 d-block">
                <ul class="list-group">
                  <li class="list-group-item">Name: <span class="fw-bold">Name</span></li>
                  <li class="list-group-item">Email: <span class="fw-bold">Email</span></li>
                  <li class="list-group-item">Mobile Number: <span class="fw-bold">Mobile</span></li>
                </ul>
              </div>
              <div class="col-sm-1 flex-column ">
                <router-link to="/contact/view/:contactId" class="btn btn-warning my-1"><i class="fa fa-eye"></i></router-link>
                <router-link to="/contact/edit/:contactId" class="btn btn-primary my-1"><i class="fa fa-pen"></i></router-link>
                <button class="btn btn-danger my-1"><i class="fa fa-trash"></i></button>
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

export default {
   name: 'ContactManger',

   data() {
    return {
      loading: false,
      contacts: [],
      errorMessage: null
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

  /* methods: {
    async getAllContacts() {
      return await ContactServices.getAllContacts()
    }
   }, */
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
</style>