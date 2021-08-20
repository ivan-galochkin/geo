<template>
  <div class="map_window">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "quiz_window",
  components: {}
}
</script>
<style scoped>

.map_window {
  width: 100%;
  height: 100%;
  background-color: #1a1a21;
  outline: #212529 solid 5px;
  border-radius: 30px;
}

</style>