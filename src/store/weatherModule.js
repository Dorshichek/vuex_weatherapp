import { SERVER } from "@/constants/server";

export const weatherModule = {
  state: () => ({
    cityWeather: {},
    citiesNames: [],
  }),
  getters: {
    CITYWEATHER(state) {
      return state.cityWeather;
    },
    CITIESNAMES(state) {
      return state.citiesNames;
    },
  },
  mutations: {
    setCityWeather(state, object) {
      state.cityWeather = object;
    },
    setCityName(state, cityName) {
      state.citiesNames.push(cityName);
    },
    deleteCity(state, cityName) {
      state.citiesNames.shift(cityName);
    },
  },
  actions: {
    async getCityWeather(state, cityName) {
      const city = cityName;
      const url = `${SERVER.URL}?q=${city}&appid=${SERVER.API_KEY}`;
      try {
        const request = await fetch(url);
        const response = await request.json();
        console.log(response);
        if (response.cod === SERVER.STATUS_OK) {
          state.commit("setCityName", city);
          state.commit("setCityWeather", response);
        }
      } catch (e) {
        console.log(e);
      }
    },
    deleteCity(state, cityName) {
      state.commit("deleteCity", cityName);
    },
  },
  modules: () => ({}),
};
