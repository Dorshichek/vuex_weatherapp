<template>
  <form class="weather-app" @submit.prevent>
    <BaseInput
      v-model="cityName"
      class="weather-app__input"
      placeholder="Введите город"
      type="text"
    />
    <button
      class="weather-app__search"
      type="submit"
      @click="addCityWeather"
    ></button>
  </form>
</template>

<script>
import BaseInput from "@/components/Ui/BaseInput";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "WeatherForm",
  components: {
    BaseInput,
  },
  data() {
    return {
      cityName: "",
    };
  },
  props: {},
  computed: {
    ...mapGetters({
      cityWeather: "CITYWEATHER",
    }),
  },
  methods: {
    ...mapActions(["getCityWeather"]),
    addCityWeather() {
      const cityName = this.cityName;
      this.$store.dispatch("getCityWeather", cityName);
      this.cityName = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
