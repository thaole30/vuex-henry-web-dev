<template>
  <div class="status-bar" v-if="this.$store.state.auth.isAuthenticated">
    <p style="color: red; background-color: yellow">Done</p>
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "StatusBar",
  //   computed: mapState(["todos", "auth"]),
  computed: {
    doneTodos() {
      console.log(
        "done",
        this.$store.state.todos.filter((item) => item.completed)
      );
      return this.$store.state.todos.filter((item) => item.completed);
    },
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
