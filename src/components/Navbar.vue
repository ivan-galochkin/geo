<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <img src="https://img.icons8.com/fluency/48/000000/earth-planet.png" alt="logo" href="#"/>
      <b-navbar-brand>
        <router-link to="/hello" style="text-decoration: none; color: inherit;">GeoQuiz</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto" v-if="!$store.getters.isLoggedIn">
          <b-button variant="primary">
            <router-link style="text-decoration: none; color: white" to="/sign_up">Sign up</router-link>
          </b-button>
          <b-button variant="light">
            <router-link style="text-decoration: none;" to="/sign_in">Sign in</router-link>
          </b-button>
        </b-navbar-nav>
        <b-navbar-nav class="ms-auto" v-else>
          <b-button variant="success" style="border: solid #212529 1px" v-on:click="$store.commit('deleteCredentials')">
            <router-link style="text-decoration: none ; color: inherit" to="/sign_in">Log out</router-link>
          </b-button>
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