<template>
  <v-fab-transition>
    <v-btn fab="fab" small dark="dark" fixed="fixed" bottom="bottom" right="right" color="red" v-scroll="onScroll" v-show="fab" @click="toTop">
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: 'app-fab',

  data: () => ({
    fab: false
  }),

  methods: {
    onScroll () {
      if (typeof window === 'undefined') return;

      const top = window.pageYOffset ||
        document.documentElement.offsetTop ||
        0;

      this.fab = top > 300;
    },
    toTop () {
      this.$router.push({ hash: '' });
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style lang="stylus" scoped>
  .setting-fab
    top:50%!important;
    right:0;
    border-radius:0
  .page-wrapper
    min-height:calc(100vh - 64px - 50px - 81px );

</style>
