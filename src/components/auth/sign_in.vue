<template>
  <div class="container-fluid w-50 mx-auto my-5 border-dark rounded" style="height: min-content; background: #212529; color:white">
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
        <button class="btn btn-success btn-lg btn-block" @click.prevent="sign_in">Sign in</button>
      </div>
      <p class="forgot-password text-right mt-2 mb-4">
        Don't have an account?
        <router-link to="/sign_up"><a class="ml-2">Sign Up</a></router-link>
      </p>


    </form>
  </div>
</template>

<script>
import axios from "axios";
import {store} from "@/main";
import {router} from "@/router";

export default {
  name: "sign_in",
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async sign_in() {
      const data = {email: this.email, password: this.password}
      await axios.post('http://127.0.0.1:8000/users/sign_in', data).then(function (response) {
        store.commit("setTokens", response.data);
        store.commit("setUser", response.data);
        router.push("/catalog")
      })
    }
  }

}

</script>

<style scoped>


</style>