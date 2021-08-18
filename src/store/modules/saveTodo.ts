export default {
  state: {},
  mutations: {
    saveLocal(data: { text: string; checked: boolean }[]) {
      localStorage.setItem("todolist", JSON.stringify(data));
    },
  },
  getters: {
    getLocal() {
      const data = localStorage.getItem("todolist");
      if (data === null) return null;

      return JSON.parse(data);
    },
  },
  actions: {},
};
