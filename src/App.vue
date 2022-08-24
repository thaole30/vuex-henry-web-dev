<template>
  <div id="app">
    <Navbar />
    <p>Learn Vuex</p>
    <TodoList />
    <StatusBar />
    <ProgressBar />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import Navbar from "./components/Navbar.vue";
import StatusBar from "./components/StatusBar.vue";
import ProgressBar from "./components/ProgressBar.vue";

export default {
  name: "App",

  components: {
    TodoList,
    Navbar,
    StatusBar,
    ProgressBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
