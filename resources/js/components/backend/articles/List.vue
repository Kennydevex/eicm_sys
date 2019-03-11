<template lang="html">
  <v-container grid-list-xl fluid>
    <div class="">
      <v-card id="create">
        <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :hover="hover"
        :transition="transition"
        fixed="">
        <v-btn
        slot="activator"
        color="blue darken-2"
        dark
        fab
        v-model="fab">
        <v-icon>fa-file-text</v-icon>
        <v-icon>fa-file-text-o</v-icon>
      </v-btn>

      <!-- Mostrar botão para criar nova categoria se existir entidades -->
      <v-btn
      v-if="entities"
      fab
      dark
      small
      color="amber accent-4"
      :to="{ name: 'new_article'}"
      >
      <v-icon>fa-plus</v-icon>
    </v-btn>

    <v-btn
    fab
    dark
    small
    color="teal "
    v-tooltip.top-center="'Teste de tooltip'">
    <v-icon>fa-cloud-download</v-icon>
  </v-btn>

  <v-btn
  fab
  dark
  small
  color="red lighten-1">
  <v-icon>fa-trash</v-icon>
</v-btn>
</v-speed-dial>
</v-card>

<!-- ============================================================================= -->
<div class="">

  <!-- ============================================================================= -->
  <!-- ============================================================================= -->
  <!-- <v-layout row justify-center>
    <create-article-form></create-article-form>
  </v-layout> -->
  <!-- ============================================================================= -->
  <!-- ============================================================================= -->

  <!-- mini statistic start -->
  <v-layout row wrap>
    <v-flex lg3 sm6 xs12>
      <mini-statistic
      icon="fa-file"
      title="200+"
      sub-title="Total de Artigos"
      color="indigo"
      >
    </mini-statistic>
  </v-flex>
  <v-flex lg3 sm6 xs12>
    <mini-statistic
    icon="fa-user"
    title="200+"
    sub-title="Artigos Publicados"
    color="red"
    >
  </mini-statistic>
</v-flex>
<v-flex lg3 sm6 xs12>
  <mini-statistic
  icon="fa fa-twitter"
  title="200+"
  sub-title="Artigos Por Publicar"
  color="light-blue"
  >
</mini-statistic>
</v-flex>
<v-flex lg3 sm6 xs12>
  <mini-statistic
  icon="fa fa-instagram"
  title="50+"
  sub-title="Artgos Dispublicados"
  color="purple"
  >
</mini-statistic>
</v-flex>
</v-layout>
<!-- mini statistic  end -->
<v-divider></v-divider>

<v-layout row wrap>
  <v-flex xs12>
    <app-all-articles></app-all-articles>
  </v-flex>
</v-layout>

</div>
<!-- ============================================================================= -->
</div>
</v-container>

</template>

<script>
import CreateArticleForm from "../partials/widgets/forms/article/CreateArticleForm";
import MiniStatistic from "../partials/widgets/statistic/MiniStatistic";
import AppAllArticles from "../partials/datas/AppAllArticles";

export default {
  data: () => ({
    direction: "top",
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: "scale-transition",
    msg: "Tooltip example"
  }),

  components: {
    CreateArticleForm,
    AppAllArticles,
    MiniStatistic
  },

  computed: {
    entities: function() {
      return this.$store.getters.entities;
    }
  },

  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    }
  },

  methods: {
    handleToggleCreateArticleDialog() {
      window.getApp.$emit("APP_ARTICLE_CREATE_DIALOG");
    }
  }
};
</script>

<style lang="stylus" scoped>
.icon_btn {
  height: auto;

  .fab-text {
    rgba(0, 0, 0, 0.54);
  }
}
</style>
