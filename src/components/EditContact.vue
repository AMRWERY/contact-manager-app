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
        <form>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Name">
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Photo URl">
          </div>
          <div class="mb-2">
            <input type="email" class="form-control" placeholder="Email">
          </div>
          <div class="mb-2">
            <input type="number" class="form-control" placeholder="Mobile">
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Company">
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Title">
          </div>
          <div class="mb-2">
            <select class="form-control">
              <option>Select Group</option>
            </select>
          </div>
          <div class="mb-2">
            <button type="submit" class="btn btn-outline-danger">Update</button>
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img src="../assets/user.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name: 'EditContact',
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