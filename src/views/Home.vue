<template>
  <div>
    <v-row align="center" justify="center">
      <h1>{{$t('leagues')}}</h1>
    </v-row>
    <v-row align="center" justify="center">
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="(league, index) in leagues" :key="index" class="league-list-item">
              <td>
                <v-avatar>
                  <v-img :src="league.avatar" />
                </v-avatar>
              </td>
              <td>{{ league.name }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      leagues: [
        {
          avatar:
            "https://upload.wikimedia.org/wikipedia/pt/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
          name: "Campeonato Brasileiro"
        }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
.league-list-item {
  cursor: pointer;
}
</style>
