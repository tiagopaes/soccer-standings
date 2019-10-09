<template>
  <div>
    <v-row align="center" justify="center">
      <h1>{{$t('brazilian_league')}}</h1>
    </v-row>
    <v-row align="center" justify="center">
      <v-avatar>
        <v-img
          src="https://upload.wikimedia.org/wikipedia/pt/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png"
        />
      </v-avatar>
    </v-row>
    <div class="my-4"></div>
    <!-- <v-row class="mb-2" align="center" justify="center">
      <h2>{{$t('standings_table.standings_table')}}</h2>
    </v-row>-->
    <v-row align="center" justify="center">
      <v-simple-table>
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
            <tr class="mb-8" v-for="(team, index) in table" :key="index">
              <td>{{ index + 1 }}</td>
              <td>
                <v-avatar>
                  <v-img :src="team.team.crestUrl" />
                </v-avatar>
                {{team.team.name}}
              </td>
              <td class="font-weight-bold">{{ team.points }}</td>
              <td>{{ team.playedGames }}</td>
              <td>{{ team.won }}</td>
              <td>{{ team.lost }}</td>
              <td>{{ team.draw }}</td>
              <td>{{ team.goalsFor }}</td>
              <td>{{ team.goalsAgainst }}</td>
              <td>{{ team.goalDifference }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "BrazilianLeague",
  data() {
    return {
      table: [
        {
          position: 1,
          team: {
            id: 65,
            name: "Manchester City FC",
            crestUrl:
              "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
          },
          playedGames: 2,
          won: 2,
          draw: 0,
          lost: 0,
          points: 6,
          goalsFor: 8,
          goalsAgainst: 1,
          goalDifference: 7
        },
        {
          position: 2,
          team: {
            id: 64,
            name: "Liverpool FC",
            crestUrl:
              "http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg"
          },
          playedGames: 2,
          won: 2,
          draw: 0,
          lost: 0,
          points: 6,
          goalsFor: 6,
          goalsAgainst: 0,
          goalDifference: 6
        }
      ]
    };
  }
};
</script>
