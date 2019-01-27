<template lang="html">
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel hide-controls delimiter-icon="stop">
          <v-carousel-item v-for="item in items" :key="item.id" :src="item.src">
            <div class="title">
              <v-card class="slide_content_area" max-width="400" tile elevation-5>
                <v-card-title primary-title>
                  <p>{{item.title}}</p>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <p class="grey--text text--lighten-3 text-xs-justify subheading">{{item.description}}</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" outline round>Ver mais</v-btn></v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        items: [{
            src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
            id: "ig",
            title: "Informática de Gestão",
            description: "O curso de informática de Gestão lecionado na EICM-GDC, que tem o principal foco em Blablabla, e que irá permitir quaquaqua, e isso aquilo e lalala..."
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
            id: "ag",
            title: "Artes Gŕaficas",
            description: "O curso de Artes Gŕaficas lecionado na EICM-GDC, que tem o principal foco em Blablabla, e que irá permitir quaquaqua, e isso aquilo e lalala..."
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
            id: "cc",
            title: "Construção Cívil",
            description: "O curso de Construção Cívil lecionado na EICM-GDC, que tem o principal foco em Blablabla, e que irá permitir quaquaqua, e isso aquilo e lalala..."
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
            id: "m",
            title: "Mecânica",
            description: "O curso de Mecânica lecionado na EICM-GDC, que tem o principal foco em Blablabla, e que irá permitir quaquaqua, e isso aquilo e lalala..."
          }
        ]
      };
    }
  };
</script>

<style lang="css" scoped>
  .title {
    position: absolute;
    top: 50px;
    right: 20px;
    z-index: 1000;
  }
  .slide_content_area{
    background-color: rgba(0, 0, 0, 0.5);
  }
 .v-carousel__controls {
    background: aqua;
  }
  
  .container {
    padding: 0;
  }
</style>
