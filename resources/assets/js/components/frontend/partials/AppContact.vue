<template lang="html">
  <v-card color="white" flat tile mr-5>
    <v-container grid-list-xs,sm,md,lg,xl fluid>
      <v-layout row wrap>
        <v-flex xs12 text-xs-center mt-3 mb-3>
          <h2>CONTACTOS</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm6>

          <v-card color="transparent">
            <v-list two-line>
              <v-list-tile @click="" color="primary">
                <v-list-tile-action>
                  <v-icon color="indigo">phone</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>(+238) 2324289</v-list-tile-title>
                  <v-list-tile-sub-title>Direção</v-list-tile-sub-title>
                </v-list-tile-content>

                <!-- <v-list-tile-action>
                  <v-icon>chat</v-icon>
                </v-list-tile-action> -->
              </v-list-tile>

              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>(+238) 2318765</v-list-tile-title>
                  <v-list-tile-sub-title>Secretaria</v-list-tile-sub-title>
                </v-list-tile-content>

                <!-- <v-list-tile-action>
                  <v-icon>chat</v-icon>
                </v-list-tile-action> -->
              </v-list-tile>

              <v-divider inset></v-divider>

              <v-list-tile @click="">
                <v-list-tile-action>
                  <v-icon color="indigo">mail</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>diretor@example.com</v-list-tile-title>
                  <v-list-tile-sub-title>Diretor</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile @click="">
                <v-list-tile-action></v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>direcao@example.com</v-list-tile-title>
                  <v-list-tile-sub-title>Direção</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-divider inset></v-divider>

              <v-list-tile @click="">
                <v-list-tile-action>
                  <v-icon color="indigo">location_on</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>Morada</v-list-tile-title>
                  <v-list-tile-sub-title>Mindelo, São Vicente, Cabo Verde</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>

          <!-- <v-card color="transparent" flat>
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
</v-card> -->
</v-flex>
<v-flex xs12 sm6>
  <v-card color="white" flat ml-5>
    <v-card-text>
      <v-form>
        <!-- ================================================= -->
        <v-container grid-list-xl fluid>
          <v-layout wrap>
            <v-flex xs12 sm6>
              <v-text-field
              color="purple darken-2"
              label="Nome"
              >
            </v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
            color="blue darken-2"
            label="Email"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-textarea
            outline
            name="input-7-4"
            label="Escreva aqui a sua mensagem"
            ></v-textarea>
          </v-flex>
          <v-flex xs12 pa-1>
            <v-btn outline color="primary">Enviar</v-btn>
          </v-flex>

        </v-layout>
      </v-container>
      <!-- ================================================= -->
    </v-form>
  </v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</v-card>

</template>

<script>
export default {

  data () {
    return {
      items: [
        {
          action: 'fa fa-map fa-2x',
          title: 'Localização',
          items: [
            { title: 'Cabo Verde, São Vicente, Mindelo, Morada, CP: 5050' }
          ]
        },
        {
          action: 'fa fa-phone-square fa-2x',
          title: 'Telefone',
          items: [
            { title: '+238 9178599' },
            { title: '+238 9178599' }
          ]
        },
        {
          action: 'fa fa-envelope fa-2x',
          title: 'Email',
          items: [
            { title: 'eicm.gdc@gmail.com' },
            { title: 'eicm.mindelo@gmail.com' },
            { title: 'eicm.dir@gmail.com' },
          ]
        },
        {
          action: 'fa fa-facebook-official fa-2x',
          title: 'Facebook',
          items: [
            { title: 'EICM-GDC Oficial' },
            { title: 'Curso Informatica de Gestao' }
          ]
        },
        {
          action: 'fa fa-twitter-square fa-2x',
          title: 'Twiter',
          items: [
            { title: '@eicmoficial' }
          ]
        },


      ]
    }
  }
}
</script>

<style lang="css">
</style>
