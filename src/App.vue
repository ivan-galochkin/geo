<template>
  <div class="content">
    <Navbar/>
    <router-view/>
    <footer class="footer"><h1></h1></footer>
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
      db_url: "http://127.0.0.1:8000"
    }
  },
}
</script>

<style scoped>
.footer {
  margin-top: auto;
}

.content {
  display: grid;
  background: url(https://i.ibb.co/7zfyBbb/462acf1fbd2e.png) center;
  min-height: 100vh;
  margin: 0;
  grid-template-rows: auto 1fr auto;
}

</style>
