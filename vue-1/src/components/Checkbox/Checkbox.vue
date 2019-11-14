<template>
    <label>
        <input type="checkbox" @change="onChange()">
        {{label}} - {{value}}
    </label>
</template>

<script>
  export default {
    name: 'Checkbox',
    props: {
      label: String,
      value: Boolean,
      input: Function,
    },
    methods: {
      onChange() {
        this.$emit('changeValue');
      }
    }
  };
</script>

<style scoped>

</style>
