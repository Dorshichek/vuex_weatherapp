<template>
  <div class="aside">
    <div class="aside__top">
      <span class="aside__title">Added Locations:</span>
    </div>
    <div v-if="cityNames.length > 0" class="aside__cities">
      <ul v-for="city in cityNames" :key="city" class="aside__list">
        <aside-item :city="city" @removeCity="removeCity"></aside-item>
      </ul>
    </div>
    <span v-else class="aside__empty">Список пуст!</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AsideItem from "@/components/AsideItem";

export default {
  name: "WeatherAside",
  components: { AsideItem },
  computed: {
    ...mapGetters({
      cityNames: "CITIESNAMES",
    }),
  },
  methods: {
    ...mapActions["deleteCity"],
    removeCity(city) {
      this.$store.dispatch("deleteCity", city);
    },
  },
};
</script>

<style scoped></style>
