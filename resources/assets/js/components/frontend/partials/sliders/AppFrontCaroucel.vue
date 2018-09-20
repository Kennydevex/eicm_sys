<template lang="html">
  <div class="front_caroucel">

    <vue-flux
    :options="fluxOptions"
    :images="fluxImages"
    :transitions="fluxTransitions"
    :captions="fluxCaptions"
    ref="slider">
 <flux-caption slot="caption" :slider="$refs.slider"></flux-caption>
  </vue-flux>
  <div class="controls">

    <v-btn class="nextBtn" small outline  fab dark color="rgba(0, 0, 0, 0.5)" @click="$refs.slider.showImage('next')">
      <v-icon x-large dark>fa-angle-right</v-icon>
    </v-btn>
    <v-btn class="prevBtn" small outline  fab dark color="rgba(0, 0, 0, 0.5)" @click="$refs.slider.showImage('previous')">
      <v-icon x-large dark>fa-angle-left</v-icon>
    </v-btn>
    <v-btn class="playBtn" small outline  fab dark color="rgba(0, 0, 0, 0.5)" @click="hundleToggleAutoPlay()">
      <v-icon dark v-if="autoplayStatus">fa-pause</v-icon>
      <v-icon dark  v-else>fa-play</v-icon>
    </v-btn>

    <v-icon class="fullBtn" small dark color="rgba(0, 0, 0, 0.5)"  @click="$refs.slider.toggleFullscreen()">fa-user</v-icon>

  </div>

</div>
</template>

<script>
import { VueFlux, Transitions } from 'vue-flux'

export default {
  components: {
    VueFlux
  },

  data: () => ({
    autoplayStatus: true,
    fluxOptions: {
      autoplay: true,
      height: '100'
    },
    fluxImages: [
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/animals',
      'https://placeimg.com/640/480/people',
      'https://placeimg.com/640/480/tech',
    ],

    caption: ' teste da silva assim',

    fluxCaptions: [
      'kmfromforemreokgmreogmero',
      'kmfromforemreokgmreogmero',
      'kmfromforemreokgmreogmero',
      'kmfromforemreokgmreogmero',
    ],

    fluxTransitions: {
      transitionFade: Transitions.transitionFade
    }
  }),

  methods: {
    hundleToggleAutoPlay: function () {
      this.$refs.slider.toggleAutoplay()
      this.autoplayStatus = !this.autoplayStatus
    }
  }
}
</script>

<style lang="stylus" scoped>
.front_caroucel {
  position: relative;
  z-index: 1;
}
.prevBtn {
  position: absolute;
  top: 50%;
  left: 10px;
  z-index: 1000;
}

.nextBtn {
  position: absolute;
  top: 50%;
  right: 10px;
  z-index: 1000;
}

.playBtn {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1000;
}
.fullBtn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
}
</style>
