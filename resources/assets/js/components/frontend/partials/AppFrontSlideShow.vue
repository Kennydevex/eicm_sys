<template lang="html">
  <v-card
  height="580"
  >
  <vue-flux
  :options="fluxOptions"
  :images="fluxImages"
  :transitions="fluxTransitions"
  :captions="fluxCaptions"
  ref="slider">
  <flux-pagination slot="pagination"></flux-pagination>
  <!-- <flux-controls slot="controls"></flux-controls> -->
  <!-- <flux-caption class="app-caption" slot="caption"></flux-caption> -->
  <custom-caption v-if="mounted" slot="caption" :slider="$refs.slider"></custom-caption>

</vue-flux>

</v-card>
</template>

<script>
import { VueFlux, FluxCaption, FluxControls, FluxPagination, Transitions } from 'vue-flux'
import CustomCaption from './CustomCaption.vue'

export default {
  components: {
    VueFlux,
    FluxPagination,
    FluxControls,
    FluxCaption,
    CustomCaption
  },

  data: () => ({
    mounted: false,
    fluxOptions: {
      autoplay: true
    },
    fluxImages: [ 'https://placeimg.com/640/480/people', 'https://placeimg.com/640/480/tech', 'https://placeimg.com/640/480/arch/grayscale' ],
    fluxCaptions: [ "<h3>aa</h3>", 'Teste2', 'Teste3' ],
    fluxTransitions: {
      transitionZip: Transitions.transitionZip,
      transitionBlinds2d: Transitions.transitionBlinds2d,
      transitionBlocks2: Transitions.transitionBlocks2
    }
  }),
  mounted() {
    this.mounted = true;
  },
  methods: {
    // currentCaption: function () {
    //   return $refs.slider.currentCaption
    // }
  }
}
</script>

<style lang="stylus" scoped>
.app-caption{
  top: 30px;
  left: 50%;
  width: 50%;
  height: 20%;
}
</style>
