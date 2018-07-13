<template lang="html">
  <v-container fluid>
    <!-- <v-layout row wrap mb-5>
    <v-flex xs12 sm6  class="text-sm-left text-xs-center">
    <v-btn color="primary">text</v-btn>
  </v-flex>
  <v-flex xs12 sm6  class="text-sm-right text-xs-center">
  <v-btn color="primary">text</v-btn>
</v-flex>
</v-layout> -->

<v-layout row wrap>
  <v-flex xs12>
    <v-carousel hide-controls delimiter-icon="stop">
      <v-carousel-item
      v-for="item in items"
      :key="item.id"
      :src="item.src"
      >
      <div class="title">
        <v-btn color="primary">text</v-btn>
        {{item.title}}
      </div>
    </v-carousel-item>
  </v-carousel>
</v-flex>
</v-layout>
<!-- <v-layout row wrap ma-4>
  <v-flex xs12  class="text-xs-center">
    <span>Um comprimisso com a educa;\ao e com o futuro do pa]is</span>
  </v-flex>

</v-layout> -->
</v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', id: 'khkgbkjg', title: 'khkckscighbvchwebvkhbckrveeefrf'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', id: 'gjbkjhbgb', title: 'khkckscighbvchwebvkhbckrveeefrf'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', id: 'hkjhgfg', title: 'khkckscighbvchwebvkhbckrveeefrf'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', id: 'khruhtgt', title: 'khkckscighbvchwebvkhbckrveeefrf'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.title{
  position: absolute;
  bottom: 50%;
  left: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 2em;
  padding: 20px;
}

.container{
  padding: 0;
}
</style>
