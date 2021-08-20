<template>
  <div class="container-fluid w-50 mx-auto my-5 border-dark rounded" style="height: min-content; background: #212529; color:white">
    <form class>
      <div class="mt-2">
        <h3>Sign up</h3>
      </div>
      <div class="form-group" style="border-color: #1a1a21">
        <label>Email address</label>
        <b-form-input
            id="input-live"
            v-model="email"
            :state="checkEmail"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="Enter your email"
            trim
        ></b-form-input>
        <b-form-invalid-feedback id="email error">
          Incorrect email
        </b-form-invalid-feedback>
      </div>

      <div class="form-group">
        <label>Password</label>
        <b-form-input
            id="input-live"
            v-model="password1"
            :state="checkPasswordLength"
            aria-describedby="length error"
            placeholder="Enter your password"
            trim
            type="password"
        ></b-form-input>
        <b-form-invalid-feedback id="equality error">
          Enter at least 8 letters
        </b-form-invalid-feedback>
      </div>
      <div class="form-group">
        <label>Confirm password</label>
        <b-form-input
            id="input-live"
            v-model="password2"
            :state="checkEquality"
            aria-describedby="equality error"
            placeholder="Confirm your password"
            trim
            type="password"
        ></b-form-input>
        <b-form-invalid-feedback id="length error">
          Passwords do not match
        </b-form-invalid-feedback>
      </div>
      <div class="mt-2">
        <button class="btn btn-success btn-lg btn-block" type="submit" href="/sign_in" @click.prevent="sign_up">Sign up</button>
      </div>
      <p class="forgot-password text-right mt-2 mb-4">
        Already have an account? <a class="ml-2"><router-link to="/sign_in">Sign in</router-link></a>
      </p>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "sign_up",
  data() {
    return {
      email: "",
      password1: "",
      password2: "",
    }
  },
  methods: {
    sign_up() {
      if (this.check_all()) {
        const data = {email: this.email, password: this.password1};
        axios.post('http://127.0.0.1:8000/users/sign_up', data).then();
      }
      else {
        alert("Invalid credentials");
      }
    },
    check_all () {
      return this.checkEquality && this.checkPasswordLength && this.checkEmail
    }
  },
  computed: {
    checkPasswordLength() {
      return this.password1.length > 7;
    },
    checkEquality() {
      return this.password1 === this.password2;
    },
    checkEmail() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email)
    },
  }
}
</script>

<style scoped>

</style>