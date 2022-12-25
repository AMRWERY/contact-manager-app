<template>
    <nav class="navbar navbar-expand-lg bg-success">
        <div class="container">
          <router-link to="/" class="link"><i class="fa fa-mobile"></i> Vue Contact Manger</router-link>
        </div>
      </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.link {
    color: antiquewhite;
    text-decoration: none;
    font-size: 1.6rem;
}

</style>