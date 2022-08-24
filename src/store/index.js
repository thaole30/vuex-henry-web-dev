import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
if (process.env.NODE_ENV === "development") {
  Vue.config.devtools = true;
}

const storeData = {
  state: {
    todos: [
      { id: 1, title: "job1", completed: true },
      { id: 2, title: "job2", completed: true },
      { id: 3, title: "job3", completed: false },
      { id: 4, title: "job4", completed: true },
    ],
    auth: {
      isAuthenticated: false,
    },
  },
  getters: {
    doneTodos: (state) => state.todos.filter((item) => item.completed),
    progress: (state, getters) => {
      //   const doneTodos = state.todos.filter((item) => item.completed);
      const doneTodos = getters.doneTodos;
      return Math.round((doneTodos.length / state.todos.length) * 100);
    },
  },
  mutations: {
    TOGGLE_AUTH(state) {
      state.auth.isAuthenticated = !state.auth.isAuthenticated;
    },
    TOGGLE_COMPLETE(state, todoId) {
      state.todos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      });
    },
  },
};

const store = new Vuex.Store(storeData);

export default store;
