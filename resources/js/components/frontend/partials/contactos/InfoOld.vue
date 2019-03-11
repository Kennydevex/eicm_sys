<template>
  <v-card color="transparent" flat>
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

  <v-list-tile @click="teste()">
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
      <v-list-tile-title>Localização</v-list-tile-title>
      <v-list-tile-sub-title>Mindelo, São Vicente, Cabo Verde</v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</v-list>
</v-card>
</template>

<script>
import ContactInfo from '../../../../_helpers/api/ContactInfo'
export default {
  data: () => ({
    items: ContactInfo,
  })
}
</script>
