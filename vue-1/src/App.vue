<template>
  <v-app>
    <v-content>
      <v-container fluid class="main-container">
      <Settings :success-count="successCount" :try-counts="tryCounts" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Settings from './containers/Settings/Settings';

  export default {
    name: 'App',

    components: {
      Settings
    },

    data: () => ({
      successCount: 15,
      tryCounts: 25,
    }),
  };
</script>

<style scoped>
  .main-container {
    padding-left: 15%;
  }
</style>
