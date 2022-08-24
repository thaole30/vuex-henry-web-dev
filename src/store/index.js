import Vue from "vue";
import Vuex from "vuex";

//Import modules
import auth from "./modules/auth";
import todos from "./modules/todo";

Vue.use(Vuex);
if (process.env.NODE_ENV === "development") {
  Vue.config.devtools = true;
}

const storeData = {
  modules: {
    auth,
    todos,
  },
};

const store = new Vuex.Store(storeData);

export default store;
