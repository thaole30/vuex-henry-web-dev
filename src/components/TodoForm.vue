<template>
  <form @submit="handleSubmit">
    <input type="text" v-model="title" />
    <input type="submit" value="Add" />
  </form>
</template>

<script>
// import { mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "TodoForm",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    // ...mapActions(["addTodo"]), //addToDo() === this.$store.dispatch('addTodo')
    handleSubmit(event) {
      event.preventDefault();

      this.$store.dispatch("addTodo", {
        id: uuidv4(),
        title: this.title,
        completed: false,
      });
    },
  },
};
</script>

<style scoped>
form {
  padding: 10px;
}
input[type="text"] {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin: 6px 0;
  border: 2px solid plum;
}
input[type="submit"] {
  margin: 10px auto;
  padding: 10px;
  border: 0;
  display: block;
}
</style>
