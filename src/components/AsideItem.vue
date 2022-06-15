<template>
  <li class="aside__item">
    {{ city }}
    <button class="aside__button-close" @click="$emit('removeCity', city)">
      x
    </button>
  </li>
</template>

<script>
export default {
  name: "AsideItem",
  props: {
    city: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
