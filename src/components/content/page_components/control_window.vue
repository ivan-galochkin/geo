<template>
  <div class="control_window">
    <h3 class="click_on">Click on</h3>
    <h2 class="state_name">{{ this.current_state }}</h2>
  </div>

</template>

<script>
export default {
  name: "control_window",
  data() {
    return {
      current_state: this.$store.state.quiz_data.current_task_state
    }
  },
  methods: {
    chooseRandomState () {
      const states = this.$store.state.quiz_data.current_states
      const random_state = states[Math.floor(Math.random()*states.length)];
      this.$store.commit("setRandomState", random_state);
    },
    getStates() {
      const collection = document.getElementsByClassName('state').item(0).children;
      const states = [];
      for (let i = 0; i < collection.length; i++) {
        states.push(collection.item(i).textContent);
      }
      this.$store.commit("setStatesData", states)
    }
  },
  mounted() {
    if (this.$store.state.quiz_data.current_task_state === null) {
      this.getStates();
      this.chooseRandomState();
    }
  }
}
</script>

<style scoped>
.control_window {
  display: grid;
  color: #B0B0B0;
  width: 100%;
  height: 100%;
  background-color: #1a1a21;
  outline: #212529 solid 5px;
  border-radius: 30px;
}

.click_on {
  text-align: center;
}

.state_name {
  text-align: center;
  color: darkred;
}

</style>