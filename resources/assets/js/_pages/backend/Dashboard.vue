<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <!-- mini statistic start -->
        <v-flex lg3 sm6 xs12>
          <mini-statistic
          icon="fa-users"
          :title="user.length"
          sub-title="Utilizadores ativos"
          color="indigo"
          >
        </mini-statistic>
      </v-flex>
      <v-flex lg3 sm6 xs12>
        <mini-statistic
        icon="fa-user"
        :title="user.length"
        sub-title="Utilizadores ativos"
        color="red"
        >
      </mini-statistic>
    </v-flex>
    <v-flex lg3 sm6 xs12>
      <mini-statistic
      icon="fa fa-twitter"
      title="200+"
      sub-title="Followers"
      color="light-blue"
      >
    </mini-statistic>
  </v-flex>
  <v-flex lg3 sm6 xs12>
    <mini-statistic
    icon="fa fa-instagram"
    title="50+"
    sub-title="Shots"
    color="purple"
    >
  </mini-statistic>
</v-flex>
<!-- mini statistic  end -->
</v-layout>
</v-container>
</div>
</template>

<script>
import MiniStatistic from '../../components/backend/partials/widgets/statistic/MiniStatistic'
export default {
  components: {
    MiniStatistic,

  },
  data: () => ({
    user:[{
      name: 'Joao'
    }]
  }),

};
</script>
