<template lang="html">
  <v-dialog
  v-model="showCreateModel"
  max-width="640px"
  persistent
  >
  <v-card>
    <v-card-title class="grey lighten-5"><h4>Criar Funções</h4></v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-form v-model="valid">
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
            label="* Nome da Permisssão"
            name="name"
            v-model="role.name"
            v-validate="'required'"
            data-vv-name="name"
            :error-messages="errors.collect('name')"
            required
            hint="Idendificador único da funções"
            ></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-text-field
            label="* Rótulo"
            name="display_name"
            hint="Nome de apresentação da funções"
            v-model="role.display_name"
            required
            v-validate="'required'"
            data-vv-name="rotulo"
            :error-messages="errors.collect('rotulo')"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 d-flex>
            <v-select
            :items="permissions"
            v-model="role.permissions"
            item-text="name"
            item-value="id"
            multiple
            label="Associar permissões"
            chips
            deletable-chips
            prepend-icon="map"
            hide-selected
            no-data-text="Sem dados"
            ></v-select>
          </v-flex>

          <v-flex xs12>
            <v-textarea
            label="Descrição da funções"
            name="description"
            hint="Escreva aqui uma pequena descrição desta funções"
            v-model="role.description"
            solo
            >
          </v-textarea>
        </v-flex>




      </v-layout>
    </v-form>
  </v-card-text>

  <v-card-actions>
    <v-spacer></v-spacer>

    <v-btn
    color="red"
    flat="flat"
    @click="showCreateModel = false"
    outline
    >
    Sair
  </v-btn>

  <v-btn
  color="blue"
  flat="flat"
  @click="clear"
  outline
  >
  Limpar
</v-btn>

<v-btn
color="green darken-1"
flat="flat"
outline
@click="addrole"
>
Registar
</v-btn>

</v-flex>

</v-card-actions>
</v-card>
</v-dialog>
</template>

<script>
export default {
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {

      role: {
        name: '',
        display_name: '',
        description: '',
        permissions: []
      },
      showCreateModel: false,
      valid: true,
      dictionary: {
        custom: {
          name: {
            required: () => 'Campo de prenchimento obrigatório',
          },

          rotulo: {
            required: () => 'Campo de prenchimento obrigatório',
          },
        }
      }
    }
  },

  mounted () {
    this.$validator.localize('pt', this.dictionary)
  },

  created () {
    this.getPermissions()
    window.getApp.$on('APP_ROLE_CREATE_DIALOG', () => {
      this.handleShowHideModel()
    })
  },

  computed: {
    permissions: function () {
      return this.$store.getters.permissions
    },
  },

  methods: {
    getPermissions: function () {
      if(this.permissions.length){
        return
      }
      this.getUpdatedPermissions()
    },

    getUpdatedPermissions: function () {
      this.$store.dispatch('getPermissions')
    },

    handleShowHideModel: function () {
      this.showCreateModel =!this.showCreateModel
    },


    addrole(){
      this.$validator.validateAll().then(noErrorOnValidate => {
        if (noErrorOnValidate) {
          axios.post('/api/sys/roles', this.$data.role)
          .then((response) => {
            this.clear()
            this.handleShowHideModel()
            window.getApp.$emit('APP_UPDATE_ALL_ROLE_DATA')
          })
          .catch((err) => {console.log()})
        }
      });
    },

    clear () {
      this.role = {};
      this.$validator.reset()
    },

  }

}
</script>

<style lang="css">
</style>
