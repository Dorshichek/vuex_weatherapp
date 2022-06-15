import { createStore } from "vuex";
import { weatherModule } from "@/store/weatherModule";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    weather: weatherModule,
  },
});
