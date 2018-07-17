<template lang="html">
  <v-parallax
  dark
  src="http://hdqwalls.com/wallpapers/material-design-blue-and-white-to.jpg"
  >

  <v-layout>
    <v-flex xs12 text-xs-center mt-5>
      <h2>CONTACTOS</h2>
    </v-flex>
  </v-layout>

  <v-layout
  align-center
  row
  justify-center>
  <v-flex xs12 md6 mr-2>
    <v-card color="transparent" flat>
      <v-card-text>
        <v-list>
          <v-list-group
          v-for="item in items"
          v-model="item.active"
          :key="item.title"
          :prepend-icon="item.action"
          no-action
          >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
          v-for="subItem in item.items"
          :key="subItem.title"
          @click=""
          >
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-card-text>
</v-card>
</v-flex>

<v-flex xs12 md6 ml-2>
  <v-card color="transparent" flat>
    <v-card-text>
      <v-form>
        <!-- ================================================= -->
        <v-container grid-list-xl fluid>
          <v-layout wrap>
            <v-flex xs12 sm6>
              <v-text-field
              color="purple darken-2"
              label="First name"
              >
            </v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
            color="blue darken-2"
            label="Last name"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-textarea
            outline
            name="input-7-4"
            label="Solo textarea"
            ></v-textarea>
          </v-flex>

        </v-layout>
      </v-container>
      <!-- ================================================= -->
    </v-form>
  </v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-parallax>
</template>

<script>
export default {
  data () {
    return {
      // -------------------- Contact form ----------------------------

      // ----------------------Contact Info ---------------------------

      items: [
        {
          action: 'fa fa-map fa-2x',
          title: 'Localização',
          items: [
            { title: 'Cabo Verde, São Vicente, Mindelo, Morada' }
          ]
        },
        {
          action: 'fa fa-phone-square fa-2x',
          title: 'Telefone',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'fa fa-envelope fa-2x',
          title: 'Email',
          items: [
            { title: 'Breakfast & brunch' },
          ]
        },
        {
          action: 'fa fa-facebook-official fa-2x',
          title: 'Facebook',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'fa fa-twitter-square fa-2x',
          title: 'Twiter',
          items: [
            { title: 'List Item' }
          ]
        },


      ]
    }
  }
}
</script>

<style lang="css" scoped>
/* .card{
background-color: transparent !important;
} */
</style>
