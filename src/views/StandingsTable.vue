<template>
  <div>
    <v-row align="center" justify="center" class="px-2">
      <h1>{{competition.name}}</h1>
    </v-row>
    <v-row align="center" justify="center">
      <v-avatar size="100px">
        <v-img contain :src="competition.shield" />
      </v-avatar>
    </v-row>
    <div class="my-4"></div>
    <v-row align="center" justify="center">
      <v-progress-circular indeterminate v-if="loading"></v-progress-circular>
      <div class="table-wrapper" v-if="!loading">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr class="font-weight-bold">
                <td>#</td>
                <td colspan="3">{{$t('standings_table.standings')}}</td>
                <td>{{$t('standings_table.points')}}</td>
                <td>{{$t('standings_table.matches')}}</td>
                <td>{{$t('standings_table.wins')}}</td>
                <td>{{$t('standings_table.loss')}}</td>
                <td>{{$t('standings_table.draws')}}</td>
                <td>{{$t('standings_table.goals_for')}}</td>
                <td>{{$t('standings_table.goals_against')}}</td>
                <td>{{$t('standings_table.goal_difference')}}</td>
              </tr>
            </thead>

            <tbody>
              <tr class="mb-8" v-for="(item, index) in table" :key="index">
                <td>{{ item.position }}</td>
                <td>
                  <v-avatar size="36px">
                    <v-img contain :src="getTeamShield(item.team)" />
                  </v-avatar>
                </td>
                <td colspan="2">{{item.team.name}}</td>
                <td class="font-weight-bold">{{ item.points }}</td>
                <td>{{ item.playedGames }}</td>
                <td>{{ item.won }}</td>
                <td>{{ item.lost }}</td>
                <td>{{ item.draw }}</td>
                <td>{{ item.goalsFor }}</td>
                <td>{{ item.goalsAgainst }}</td>
                <td>{{ item.goalDifference }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <span class="font-weight-bold title">{{$t('top_scorers.title')}}</span>
        <v-simple-table>
          <thead>
            <tr class="font-weight-bold">
              <td>{{$t('top_scorers.time')}}</td>
              <td></td>
              <td>{{$t('top_scorers.player')}}</td>
              <td colspan="2">{{$t('top_scorers.goals')}}</td>
            </tr>
          </thead>

          <tbody>
            <tr class="mb-8" v-for="(item, index) in scorers" :key="index">
              <td>
                <v-avatar size="36px">
                  <v-img contain :src="getTeamShield(item.team)" />
                </v-avatar>
              </td>
              <td>{{ item.team.name }}</td>
              <td colspan="2">{{item.player.name}}</td>
              <td class="font-weight-bold">{{ item.numberOfGoals }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </div>
    </v-row>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService";
import { teamShields } from "@/constants/index";
export default {
  name: "StandingsTable",
  data() {
    return {
      table: [],
      loading: null,
      scorers: []
    };
  },
  computed: {
    competition() {
      return this.$route.meta.competition;
    }
  },
  created() {
    this.loading = true;
    const url = `/competitions/${this.competition.id}/standings?standingType=TOTAL`;
    ApiService.get(url).then(response => {
      this.table = response.data.standings[0].table;
      this.loading = false;
    });
    const urlScorers = `/competitions/${this.competition.id}/scorers`;
    ApiService.get(urlScorers).then(response => {
      this.scorers = response.data.scorers;
      this.loading = false;
    });
  },
  methods: {
    getTeamShield(team) {
      if (team.crestUrl && team.crestUrl !== "") {
        return team.crestUrl;
      }
      return teamShields[team.id];
    }
  }
};
</script>

<style lang="css" scoped>
.table-wrapper {
  overflow-x: auto;
}
.title {
  line-height: 65px;
}
</style>
