<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <img src="https://img.icons8.com/fluency/48/000000/earth-planet.png" alt="logo" href="#"/>
      <b-navbar-brand href="#">GeoQuiz</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>

        </b-navbar-nav>

        <b-navbar-nav class="ms-auto">
          <b-button variant="primary" href="/signup" v-if="!token">Sign up</b-button>
          <b-button variant="light" href="/sign_in" v-if="!token">Sign in</b-button>
          <b-button variant="success" v-if="token">Profile</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: "Navbar"
}
</script>

<style scoped>
.navbar-nav {
  gap: 10px;
}

.navbar {
  padding: 0.5%;
}

</style>