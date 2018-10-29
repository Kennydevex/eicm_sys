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
        :items="roles"
        :rows-per-page-items="[5,10,25,50,{text:'All','value':-1}]"
        class="elevation-1"
        item-key="name"
        select-all
        v-model="selected"
        no-data-text="Aguardando resposta do servidor..."
        rows-per-page-text="Linhas por página"
        >
        <template slot="items" slot-scope="props">
          <td>
            <v-checkbox
            primary
            hide-details
            v-model="props.selected"
            ></v-checkbox>
          </td>

          <td>{{ props.item.name }} </td>
          <td>{{ props.item.display_name }}</td>
          <td align="center">
            <template  v-if="props.item.description">
              <v-icon v-if="props.expanded" @click="props.expanded = !props.expanded" small>fa-minus</v-icon>
              <v-icon v-else @click="props.expanded = !props.expanded" small>fa-plus</v-icon>
            </template>
          </td>
          <td align="center">
            <v-btn outline icon dark color="warning" small @click="handleToggleRoleUpdateDialog(props.item.id)">
              <v-icon small>fa-pencil</v-icon>
            </v-btn>
            <v-btn outline icon dark color="error" small @click="onDeleteRole(props.item.id)">
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

  <update-role-form :role="role"></update-role-form>
</div>


</template>

<script>
import UpdateRoleForm from '../widgets/forms/role/UpdateRoleForm.vue'
export default {
  data () {
    return {
      dialog: false,
      search: '',
      selected: [],
      headers: [
        {
          text: 'Nome',
          value: 'name'
        },
        {
          text: 'Rótulo',
          value: 'display_name'
        },
        {
          text: 'Descrição',
          value: 'description',
          align: 'center',

        },
        {
          text: 'Operação',
          value: '',
          align: 'center',
          sortable: false,
        },
      ],
      role: [],
    }
  },

  components: {
    UpdateRoleForm,
  },

  created: function () {
    this.getRoles()
    window.getApp.$on('APP_UPDATE_ALL_ROLE_DATA', () => {
      this.getUpdatedRoles()
    });
  },

  computed: {
    roles: function () {
      return this.$store.getters.roles
    },
  },

  methods: {
    handleToggleRoleUpdateDialog (role_id) {
      this.getSingleRole(role_id)
      window.getApp.$emit('APP_ROLE_UPDATE_DIALOG', this.role)
    },

    getRoles: function () {
      if(this.roles.length){
        return
      }
      this.getUpdatedRoles()
    },

    getUpdatedRoles: function () {
      this.$store.dispatch('getRoles')
    },

    getSingleRole: function (role_id) {
      if (this.roles.length) {
        this.role = this.roles.find((role)=>role.id == role_id)
      }else {
        axios.get('/api/sys/roles/'+role_id)
        .then((response)=>{
          this.role = response.data.data
        })
        .catch((error)=>{
        });
      }
    },

    onUpdateRole: function (role_id) {
      console.log('Utilizador a ver e: '+role_id)
    },

    onGetRole: function (role_id) {
      console.log('Função: '+role_id)
    },

    onDeleteRole: function (role) {
      this.$swal({
        title: 'Eliminar Função',
        text: "Ação irreversível, queres continuar?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, Apagar!',
        cancelButtonText: 'Não, Cancelar!'
      }).then((result) => {
        if (result.value) {
          this.deleteRole(role)
        }else if (result.dismiss === this.$swal.DismissReason.cancel) {
          this.showToastAlert('error', 'Operação cancelada!')
        }
      })
    },

    deleteRole: function (role_id) {
      axios.delete('/api/sys/roles/'+role_id)
      .then((response) => {
        this.getUpdatedRoles()
        this.showToastAlert('success', 'Operação efetuada com sucesso!')
      })
      .catch((err) => {console.log()})
    },

    showToastAlert (type, msg) {
      this.$swal({
        title: msg,
        // title: 'Operação bem sucedida <i class="fa fa-arrow-right"></i>!',
        type: type,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000
      }
    )
  },


  toggleAll () {
    if (this.selected.length) this.selected = []
    else this.selected = this.roles.slice()
  },

}


}
</script>

<style lang="css">
</style>
