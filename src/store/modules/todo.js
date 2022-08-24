import axios from "axios";

const todosModule = {
  state: {
    todos: [],
  },
  getters: {
    todos: (state) => state.todos,
    doneTodos: (state) => state.todos.filter((item) => item.completed),
    progress: (state, getters) => {
      //   const doneTodos = state.todos.filter((item) => item.completed);
      const doneTodos = getters.doneTodos;
      return Math.round((doneTodos.length / state.todos.length) * 100);
    },
  },
  mutations: {
    //DONG BO
    TOGGLE_AUTH(state) {
      state.auth.isAuthenticated = !state.auth.isAuthenticated;
    },
    TOGGLE_COMPLETE(state, todoId) {
      state.todos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      });
    },
    DELETE_TODO(state, todoId) {
      state.todos = state.todos.filter((item) => item.id !== todoId);
    },
    ADD_TODO(state, newTodo) {
      state.todos.unshift(newTodo);
    },
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    //action dong bo
    async deleteTodo(context, todoId) {
      //call mutation
      try {
        await axios.delete(
          `https://jsonplaceholder.typicode.com/todos/${todoId}`
        );
        context.commit("DELETE_TODO", todoId);
      } catch (error) {
        console.log(error);
      }
    },
    async addTodo({ commit }, newTodo) {
      try {
        await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
        commit("ADD_TODO", newTodo);
      } catch (error) {
        console.log(error);
      }
    },
    //call api getTodo
    async getTodos({ commit }) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        console.log("response", response);
        commit("SET_TODOS", response.data);
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};

export default todosModule;
