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
      const hasCityInArray = state.citiesNames.includes(cityName);
      if (!hasCityInArray) {
        state.citiesNames.push(cityName);
      } else {
        alert("Город уже добавлен");
      }
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
        if (response.cod === SERVER.STATUS_OK) {
          state.commit("setCityName", city);
          state.commit("setCityWeather", response);
        } else {
          alert(response.message);
        }
      } catch (e) {
        alert(e.message);
      }
    },
    deleteCity(state, cityName) {
      state.commit("deleteCity", cityName);
    },
  },
  modules: () => ({}),
};
