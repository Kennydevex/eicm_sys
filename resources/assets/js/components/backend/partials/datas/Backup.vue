<template lang="html">
  <v-card>
    <v-toolbar card color="white">
      <v-text-field
      flat
      solo
      prepend-icon="search"
      placeholder="Procurar na tabela..."
      v-model="search"
      hide-details
      class="hidden-sm-and-down"
      ></v-text-field>
      <v-btn icon>
        <v-icon>filter_list</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <v-data-table
      :headers="complex.headers"
      :search="search"
      :items="complex.items"
      :rows-per-page-items="[2,5,10,25,50,{text:'All','value':-1}]"
      class="elevation-1"
      item-key="name"
      select-all
      v-model="complex.selected"
      >
      <template slot="items" slot-scope="props">
        <td>
          <v-checkbox
          primary
          hide-details
          v-model="props.selected"
          ></v-checkbox>
        </td>
        <td>
          <v-avatar size="32">
            <img :src="props.item.avatar" alt="">
          </v-avatar>
        </td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.email }}</td>
        <td>{{ props.item.phone }}</td>
        <td align="center">
          <v-btn outline icon dark color="primary" small>
            <v-icon>fa-pencil-square-o</v-icon>
          </v-btn>
          <v-btn outline icon dark color="pink" small>
            <v-icon>fa-trash-o</v-icon>
          </v-btn>
          <v-btn outline icon dark color="pink" small>
            <v-icon>fa-eye</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="pageText" slot-scope="props">
        Linhas {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        A procura pela "{{ search }}" não tem qualquer resultado.
      </v-alert>
    </v-data-table>
  </v-card-text>
</v-card>
</template>

<script>
import { Items as UsersApi } from '../../../../_api/source/user'
// import {users} from '../../../../_api/system/users'
export default {
  data () {
    return {
      // users: users,
      search: '',
      complex: {
        selected: [],
        headers: [
          {
            text: 'Avatar',
            value: 'avatar',
            sortable: false,

          },
          {
            text: 'Name',
            value: 'name'
          },
          {
            text: 'Email',
            value: 'email'
          },
          {
            text: 'Phone',
            value: 'phone'
          },
          {
            text: 'Operação',
            value: '',
            align: 'center',
            sortable: false,
          },
        ],
        items: UsersApi,
      },

    }
  },

  created: function () {
    this.getUpdatedUsers()
  },

  computed: {
    users: function () {
      return this.$store.getters.users
    },
  },

  methods: {
    getUpdatedUsers: function () {
      if(this.users.length){
        return
      }
      this.$store.dispatch('getUsers')
    },



  }


}
</script>

<style lang="css">
</style>
