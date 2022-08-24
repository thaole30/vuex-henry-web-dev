<template>
  <div class="todo-list">
    <p style="color: red; background-color: yellow">My todolist</p>
    <ul v-if="auth.isAuthenticated">
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
    <p v-else style="text-align: center; color: red">Not authenticated</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import store from "@/store/index.js";
export default {
  name: "TodosList",
  data() {
    return {};
  },
  // computed: {
  //   todos() {
  //     return this.$store.state.todos;
  //   },
  //   isAuthenticated() {
  //     return this.$store.state.auth.isAuthenticated;
  //   },
  // },

  // computed: mapState({
  //   todos: (state) => state.todos,
  //   isAuthenticated: (state) => state.auth.isAuthenticated,
  // }),

  computed: mapState(["todos", "auth"]), //this.todos = this.$store.state.todos
};
</script>

<style>
.todo-list ul {
  padding: 0 10px 10px 10px;
  list-style-type: none;
}
.todo-list li {
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 4px;
  background: rgb(240, 240, 240);
  color: black;
}
.todo-list li input[type="checkbox"] {
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;
  float: right;
}
.todo-list li.completed {
  background: rgb(119, 218, 243);
}
.todo-list li button {
  float: right;
  margin-right: 20px;
}
.todo-list li button:hover {
  cursor: pointer;
  background: red;
  color: white;
}
</style>
