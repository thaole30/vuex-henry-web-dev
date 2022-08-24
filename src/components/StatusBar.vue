<template>
  <div class="status-bar" v-if="auth.isAuthenticated">
    <p style="color: red; background-color: yellow">Done</p>
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

// import { mapState } from "vuex";
export default {
  name: "StatusBar",
  //   computed: mapState(["todos", "auth"]),

  //   computed: {
  //     doneTodos() {
  //       return this.$store.getters.doneTodos;
  //     },
  //   },

  computed: {
    ...mapGetters(["doneTodos"]),
    ...mapState(["auth"]),
  },
};
</script>

<style>
.status-bar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
</style>
