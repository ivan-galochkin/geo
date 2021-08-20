<template>
  <div class="content_under_navbar">
    <div class="main_content">
      <map_window/>
    </div>
    <div class="additional_content">
      <control_window/>
    </div>
  </div>
</template>

<script>
import map_window from "@/components/content/page_components/map_window";
import control_window from "@/components/content/page_components/control_window";

export default {
  name: "main_page",
  components: {map_window, control_window}
}
</script>

<style scoped>

.additional_content {
  width: 100%;
  margin-left: 20px;
  max-height: 50%;
}
.main_content {
  min-width: 80%;
}

.content_under_navbar {
  display: flex;
  flex-direction: row;
  margin-right: 10%;
  margin-left: 10%;
  margin-top: 50px;
}

</style>