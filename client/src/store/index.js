import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    indicies: [],
    idContent: [],
  },
  mutations: {
    loadIndicies(state, payload) {
      state.indicies = payload;
      // console.log(state.indicies);
    },
    loadContent(state, payload) {
      state.content = payload;
      console.log(state.content);
    },
  },
  actions: {
    //Loading all IDS from Json File.
    async loadIndicies({ commit }) {
      // console.log(this.state.indicies);
      await axios.get("http://localhost:4000/public/").then((res) => {
        commit("loadIndicies", res.data);
      });
      // console.log(this.state.indicies);
    },
    async loadContent({ commit }, id) {
      await axios.get(`http://localhost:4000/public/${id}`).then((res) => {
        commit("loadContent", res.data);
      });
    },
  },
  modules: {},
});
