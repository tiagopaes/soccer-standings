<template>
  <div>
    <v-row class="pb-4" align="center" justify="center">
      <h1>{{$t('leagues')}}</h1>
    </v-row>
    <v-row align="center" justify="center">
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr
              v-for="(competition, index) in competitions"
              :key="index"
              class="league-list-item"
              @click="$router.push(competition.webslug)"
            >
              <td>
                <v-avatar size="48px">
                  <v-img contain :src="competition.shield" />
                </v-avatar>
              </td>
              <td>{{ competition.name }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-row>
  </div>
</template>

<script>
import { competitions } from "@/constants/index";

export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  computed: {
    competitions() {
      return Object.values(competitions);
    }
  }
};
</script>

<style lang="css" scoped>
.league-list-item {
  cursor: pointer;
}
</style>
