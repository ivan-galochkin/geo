<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from "@/components/Navbar";

export default {
  name: 'App',
  components: {Navbar},
  data() {
    return {
      db_url: "http://192.168.1.161:8000"
    }
  }
}
</script>

