<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>View Contact</h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img src="../assets/user.png">
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">Name: <span class="fw-bold">Name</span></li>
          <li class="list-group-item">Email: <span class="fw-bold">Email</span></li>
          <li class="list-group-item">Mobile Number: <span class="fw-bold">Mobile</span></li>
          <li class="list-group-item">Company: <span class="fw-bold">Company</span></li>
          <li class="list-group-item">Title: <span class="fw-bold">Title</span></li>
          <li class="list-group-item">Group: <span class="fw-bold">Group</span></li>
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
export default {
   name: 'ViewContact',
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