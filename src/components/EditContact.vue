<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>Edit Contact</h3>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="submitUpdate()">
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
              <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
            </select>
          </div>
          <div class="mb-2">
            <button type="submit" class="btn btn-outline-danger">Update</button>
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
   name: 'EditContact',

   data() {
    return {
      contactId: this.$route.params.contactId,
      contact: {
        name: '',
        company: '',
        email: '',
        title: '',
        mobile: '',
        photo: '',
        groupId: ''
      },
      loading: false,
      errorMessage: null,
      groups: []
    }
   },

   async created() {
    try {
      this.loading = true;
      const response = await ContactServices.getContact(this.contactId);
      const groupResponse = await ContactServices.getAllGroups();
      this.contact = response.data;
      this.groups = groupResponse.data;
      this.loading = false;
    }
    catch(error) {
      this.errorMessage = error;
      this.loading = false;
    }
   },

   methods: {
    async submitUpdate() {
      try {
        const response = await ContactServices.updateContact(this.contact, this.contactId)
        if (response) {
          return this.$router.push('/')
        } else {
          return this.$router.push('/contact/edit/${this.contactId}');
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