<template>
  <v-app id="app">
    <v-app-bar clipped-left app>
      <v-toolbar-title
        @click="$route.name !== 'home' ? $router.push({ name: 'home'}) : ''"
      >Soccer Standings</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style lang="css" scoped>
.v-toolbar__title {
  cursor: pointer;
}
</style>
