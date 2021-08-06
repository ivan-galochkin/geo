<template>
  <div class="container-fluid w-50 mx-auto my-5 border rounded">
    <form class>
      <div class="mt-2">
        <h3>Sign in</h3>
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" v-model="email" class="form-control form-control-lg"/>
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="password" class="form-control form-control-lg"/>
      </div>
      <div class="mt-2">
        <button type="submit" class="btn btn-dark btn-lg btn-block" v-on:click="login">Sign in</button>
      </div>
      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p>

    </form>
  </div>
</template>

<script>
import axios from "axios";
import App from "@/App";

export default {
  name: "sign_in",
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login() {
      axios.get(App.data.db_url + `/users/email?=${this.email}&password?=${this.password}`).then(
          (response) => {
            localStorage.token = response.data.token;
          }
      ).catch(
          (error) => {
            console.log(error);
          }
      )
    }
  }

}

</script>

<style scoped>


</style>