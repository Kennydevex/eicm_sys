<template>
  <div>

    <v-card color="transparent" flat>
      <v-list two-line>
        <template v-for="item in items">

          <v-list-tile v-if="item.event" @click="showLocationDialog=true">
            <v-list-tile-action v-if="item.action">
              <v-icon color="indigo">{{item.action}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-action v-else></v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
              <v-list-tile-sub-title>{{item.subtitle}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile v-else>
            <v-list-tile-action v-if="item.action">
              <v-icon color="indigo">{{item.action}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-action v-else></v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
              <v-list-tile-sub-title>{{item.subtitle}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="item.divider" inset></v-divider>
        </template>
      </v-list>
    </v-card>

    <v-dialog
    v-model="showLocationDialog"
    max-width="890"
    >
    <v-card pa-1>
      <v-card-text>
        <eicm-location></eicm-location>
      </v-card-text>
    </v-card>
  </v-dialog>
</div>


</template>

<script>
import ContactInfo from '../../../../_helpers/api/ContactInfo'
import EicmLocation from '../../../util/maps/EicmLocation.vue'

export default {
  data: () => ({
    items: ContactInfo,
    showLocationDialog: false,
  }),
  components: {
    EicmLocation
  }

}
</script>
