<template lang="html">
  <div>
  
    <v-card>
      <v-toolbar card color="white">
        <v-text-field flat solo prepend-icon="search" placeholder="Procurar na tabela..." v-model="search" hide-details class="hidden-sm-and-down"></v-text-field>
        <v-btn icon>
          <v-icon>filter_list</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text class="pa-0">
        <v-data-table :headers="headers" :search="search" :items="users" :rows-per-page-items="[5,10,25,50,{text:'All','value':-1}]" class="elevation-1" item-key="name" select-all v-model="selected" no-data-text="Aguardando resposta do servidor..." rows-per-page-text="Linhas por página">
          <template slot="items" slot-scope="props">
                <td>
                  <v-checkbox
                  primary
                  hide-details
                  v-model="props.selected"
                  ></v-checkbox>
                </td>
      
                <td>{{ props.item.folk.first_name }} </td>
                <td>{{ props.item.folk.last_name }}</td>
                <td>{{ props.item.username }}</td>
                <td>{{ props.item.folk.gender }}</td>
                <td>{{ props.item.email }}</td>
                <td>{{ props.item.folk.phone_number }}</td>
                <td>{{ props.item.folk.identification_card }}</td>
                <td align="center">
                <!-- <v-btn outline icon dark color="primary" small @click.stop="handleToggleUserInfoDialog(props.item.id)"> -->
                <v-btn :to="{ name: 'user', params: { id: props.item.id }}" outline icon dark color="primary" small @click.stop="handleToggleUserInfoDialog(props.item.id)">
                  <v-icon small>fa-info</v-icon>
                </v-btn>
                <v-btn outline icon dark color="warning" small @click="onGetUser(props.item.id)">
                  <v-icon small>fa-pencil</v-icon>
                </v-btn>
                <v-btn outline icon dark color="error" small @click="onDeleteUser(props.item)">
                  <v-icon small>fa-trash</v-icon>
                </v-btn>
              </td>
</template>

<template slot="expand" slot-scope="props">
  <v-card flat color="light-blue lighten-5">
    <v-card-text>{{ props.item.description }}</v-card-text>
  </v-card>
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
  import UpdateUserForm from "../widgets/forms/user/UpdateUserForm.vue";
  export default {
    data() {
      return {
        dialog: false,
        search: "",
        selected: [],
        headers: [{
            text: "Nome",
            value: "folk.first_name"
          },
          {
            text: "Apelido",
            value: "folk.last_name"
          },
          {
            text: "Utilizador",
            value: "username"
          },
          {
            text: "Sexo",
            value: "folk.gender"
          },
          {
            text: "Email",
            value: "email"
          },
          {
            text: "Contacto",
            value: "folk.phone_number"
          },
          {
            text: "BI",
            value: "folk.identification_card"
          },
          {
            text: "Operação",
            value: "",
            align: "center",
            sortable: false
          }
        ],
        user: []
      };
    },
    components: {
      UpdateUserForm
    },
  
    created: function() {
      this.getUsers();
      window.getApp.$on("APP_UPDATE_ALL_USERS_DATA", () => {
        this.getUpdatedUsers();
      });
    },
  
    computed: {
      users: function() {
        return this.$store.getters.users;
      }
    },
  
    methods: {
      handleToggleUserUpdateDialog(user_id) {
        this.getSingleUser(user_id);
        window.getApp.$emit("APP_USER_UPDATE_DIALOG", this.user);
      },
  
      getUsers: function() {
        if (this.users.length) {
          return;
        }
        this.getUpdatedUsers();
      },
  
      getUpdatedUsers: function() {
        this.$store.dispatch("getUsers");
      },
  
      getSingleUser: function(user_id) {
        if (this.users.length) {
          this.user = this.users.find(user => user.id == user_id);
        } else {
          axios
            .get("/api/cms/users/" + user_id)
            .then(response => {
              this.user = response.data.data;
            })
            .catch(error => {});
        }
      },
  
      onUpdateUser: function(user_id) {
        console.log("Utilizador a ver e: " + user_id);
      },
  
      onGetUser: function(user_id) {
        console.log("Permissao: " + user_id);
      },
  
      onDeleteUser: function(user) {
        this.$swal({
          title: "Eliminar utilizador " + user.first_name + " " + user.last_name + "!",
          text: "Ação irreversivel, queres continuar?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sim, Apagar!",
          cancelButtonText: "Não, Cancelar!"
        }).then(result => {
          if (result.value) {
            this.onGetUser(user.first_name + " " + user.last_name);
            this.showSuccessAlert();
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            this.showCancelAlert();
          }
        });
      },
  
      deleteUser: function(user_id) {
        axios
          .delete("/api/cms/users/" + user_id)
          .then(response => {
            this.getUpdatedUsers();
            this.showToastAlert("success", "Operação efetuada com sucesso!");
          })
          .catch(err => {
            console.log();
          });
      },
  
      showToastAlert(type, msg) {
        this.$swal({
          title: msg,
          // title: 'Operação bem sucedida <i class="fa fa-arrow-right"></i>!',
          type: type,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 5000
        });
      },
  
      toggleAll() {
        if (this.selected.length) this.selected = [];
        else this.selected = this.users.slice();
      }
    }
  };
</script>

<style lang="css">
  
</style>
