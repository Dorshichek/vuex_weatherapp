<template>
  <main class="app">
    <div class="app_wrapper">
      <WeatherForm @cityWeather="addCityWeather"></WeatherForm>
      <div class="main-wrapper">
        <div class="main-block">
          <WindowWeather></WindowWeather>
          <WeatherTabs></WeatherTabs>
        </div>
        <WeatherAside></WeatherAside>
      </div>
    </div>
  </main>
</template>

<script>
import WeatherForm from "@/components/WeatherForm";
import WindowWeather from "@/components/WindowWeather";
import WeatherTabs from "@/components/WeatherTabs";
import WeatherAside from "@/components/WeatherAside";

export default {
  name: "HomeView",
  components: {
    WeatherForm,
    WindowWeather,
    WeatherTabs,
    WeatherAside,
  },
  data() {
    return {
      cityWeather: {},
    };
  },
  methods: {
    addCityWeather(cityWeather) {
      this.cityWeather = cityWeather;
    },
  },
};
</script>
