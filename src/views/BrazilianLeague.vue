<template>
  <div>
    <v-row align="center" justify="center">
      <h1>{{$t('brazilian_league')}}</h1>
    </v-row>
    <v-row align="center" justify="center">
      <v-avatar>
        <v-img :src="competitionShield" />
      </v-avatar>
    </v-row>
    <div class="my-4"></div>
    <v-row align="center" justify="center">
      <v-progress-circular indeterminate v-if="loading"></v-progress-circular>
      <v-simple-table v-if="!loading">
        <template v-slot:default>
          <thead>
            <tr>
              <td colspan="2">{{$t('standings_table.standings')}}</td>
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
              <td>{{ index + 1 }}</td>
              <td>
                <v-avatar size="36px">
                  <v-img :src="shields[item.team.id]" />
                </v-avatar>
                {{item.team.name}}
              </td>
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
    </v-row>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService";
import { teamShields, competitionShields } from "@/constants";
export default {
  name: "BrazilianLeague",
  data() {
    return {
      competitionId: 2013,
      table: [],
      loading: null
    };
  },
  computed: {
    shields() {
      return teamShields;
    },
    competitionShield() {
      return competitionShields[this.competitionId];
    }
  },
  created() {
    this.loading = true;
    const url = `/competitions/${this.competitionId}/standings?standingType=TOTAL`;
    ApiService.get(url).then(response => {
      this.table = response.data.standings[0].table;
      this.loading = false;
    });
  }
};
</script>
