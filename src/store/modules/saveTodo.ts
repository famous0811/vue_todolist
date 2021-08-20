import { Module } from "vuex";

// interface Datatype {
//   data: ;
// }
export const saveModule: Module<null, null> = {
  mutations: {},
  getters: {
    getLocal(state): any[] | null | string {
      const data = localStorage.getItem("todolist");
      if (data === null) return null;

      return data;
    },
  },
  actions: {
    GetLocalData({ commit }) {
      commit("getLocal");
    },
    saveLocal(
      { commit },
      data: {
        text: string;
        checked: boolean;
      }[]
    ) {
      console.log(data);
      localStorage.setItem("todolist", JSON.stringify(data));
    },
  },
};
