import { createStore } from "vuex";
import saveTodolist from "./modules/saveTodo";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { saveTodolist: saveTodolist },
});
