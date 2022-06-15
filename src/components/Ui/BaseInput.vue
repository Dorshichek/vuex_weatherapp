<template>
  <input :value="modelValue" type="text" @input="updateValue" />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    modelValue: {
      type: String,
      required: true,
      default: "",
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped></style>
