<template>
  <v-app id="app">
    <v-app-bar clipped-left app>
      <v-toolbar-title
        @click="$route.name !== 'home' ? $router.push({ name: 'home'}) : ''"
      >Soccer Standings</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <!-- Place this tag where you want the button to render. -->
      <a
        class="github-button"
        href="https://github.com/tiagopaes/soccer-standings"
        data-size="large"
        data-show-count="true"
        aria-label="Star tiagopaes/soccer-standings on GitHub"
      >Star</a>
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
