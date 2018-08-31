<template lang="html">
  <div>

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
        :headers="headers"
        :search="search"
        :items="users"
        :rows-per-page-items="[5,10,25,50,{text:'All','value':-1}]"
        class="elevation-1"
        item-key="name"
        select-all
        v-model="selected"
        >
        <template slot="items" slot-scope="props">
          <td>
            <v-checkbox
            primary
            hide-details
            v-model="props.selected"
            ></v-checkbox>
          </td>
          <!-- <td>
          <v-avatar size="32">
          <img :src="props.item.avatar" alt="">
        </v-avatar>
      </td> -->
      <td>{{ props.item.first_name }} </td>
      <td>{{ props.item.last_name }}</td>
      <td>{{ props.item.username }}</td>
      <td>{{ props.item.gender }}</td>
      <td>{{ props.item.email }}</td>
      <td>{{ props.item.phone_number }}</td>
      <td>{{ props.item.identification_card }}</td>
      <td align="center">
        <v-btn outline icon dark color="primary" small @click.stop="handleToggleUserInfoDialog(props.item.id)">
          <v-icon>fa-info</v-icon>
        </v-btn>
        <v-btn outline icon dark color="warning" small @click="onGetUser(props.item.id)">
          <v-icon>fa-pencil</v-icon>
        </v-btn>
        <v-btn outline icon dark color="error" small @click="onDeleteUser(props.item.id)">
          <v-icon>fa-trash-o</v-icon>
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

<update-user-form :user="user"></update-user-form>
</div>


</template>

<script>
import { Items as UsersApi } from '../../../../_api/source/user'
import UpdateUserForm from '../widgets/forms/user/UpdateUserForm.vue'
// import {users} from '../../../../_api/system/users'
export default {
  data () {
    return {
      dialog: false,
      search: '',
      selected: [],
      headers: [
        {
          text: 'Nome',
          value: 'first_name'
        },
        {
          text: 'Apelido',
          value: 'last_name'
        },
        {
          text: 'Utilizador',
          value: 'username'
        },
        {
          text: 'Sexo',
          value: 'gender'
        },
        {
          text: 'Email',
          value: 'email'
        },
        {
          text: 'Contacto',
          value: 'phone_number'
        },
        {
          text: 'BI',
          value: 'identification_card'
        },
        {
          text: 'Operação',
          value: '',
          align: 'center',
          sortable: false,
        },
      ],
      user: [],
    }
  },

  components: {
    UpdateUserForm,
  },

  created: function () {
    this.getUsers()
  },

  computed: {
    users: function () {
      return this.$store.getters.users
    },
  },

  methods: {
    handleToggleUserInfoDialog (user_id) {
      window.getApp.$emit('APP_USER_UPDATE_DIALOG')
      //Este codigo permite-nos enviar parametro para o componete filho
      // window.getApp.$emit('APP_USER_UPDATE_DIALOG', user_id)
      this.getSingleUser(user_id)
    },

    getUsers: function () {
      if(this.users.length){
        return
      }
      this.$store.dispatch('getUsers')
    },

    getSingleUser: function (user_id) {
      if (this.users.length) {
        this.user = this.users.find((user)=>user.id == user_id)
      }else {
        axios.get('/api/sys/users/'+user_id)
        .then((response)=>{
          this.user = response.data.data
        })
        .catch((error)=>{
        });
      }
    },

    onUpdateUser: function (user_id) {
      console.log('Utilizador a ver e: '+user_id);
    },

    onGetUser: function (user_id) {
      console.log('Utilizador a atualizar e: '+user_id);
    },

    onDeleteUser: function (user_id) {
      console.log('Utilizador a apagar e: '+user_id);
    },

    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.users.slice()
    },

  }


}
</script>

<style lang="css">
</style>
