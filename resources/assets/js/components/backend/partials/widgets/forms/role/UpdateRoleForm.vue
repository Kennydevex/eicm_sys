<template lang="html">
  <v-dialog
  v-model="showEditModel"
  max-width="640px"
  persistent
  >
  <v-card>
    <v-card-title class="headline grey">Atualizar Função</v-card-title>

    <v-card-text>
      <v-form v-model="valid">
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
            label="* Nome da Permisssão"
            name="name"
            v-model="role_data.name"
            v-validate="'required'"
            data-vv-name="name"
            :error-messages="errors.collect('name')"
            required
            hint="Idendificador único da função"
            ></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-text-field
            label="* Rótulo"
            name="display_name"
            hint="Nome de apresentação da função"
            v-model="role_data.display_name"
            required
            v-validate="'required'"
            data-vv-name="rotulo"
            :error-messages="errors.collect('rotulo')"
            ></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-textarea
            label="Descrição da função"
            name="description"
            hint="Escreva aqui uma pequena descrição desta função"
            v-model="role_data.description"
            solo>
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
    @click="showEditModel = false"
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
@click="updateRole"
outline
>
Alterar
</v-btn>
</v-card-actions>
</v-card>
</v-dialog>
</template>

<script>
export default {
  props: ['role'],
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      role_id: '',
      role_data: {
        id: '',
        name: '',
        display_name: '',
        description: '',
      },
      showEditModel: false,
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
    window.getApp.$on('APP_ROLE_UPDATE_DIALOG', (role) => {
      this.showEditModel = (!this.showEditModel)
      this.role_data.id = role.id
      this.role_data.name = role.name
      this.role_data.display_name = role.display_name
      this.role_data.description = role.description
    });
  },

  methods: {
    clear () {
      this.role_data.name=''
      this.role_data.display_name=''
      this.role_data.description=''
      this.$validator.reset()
    },

    updateRole(){
      this.$validator.validateAll().then(noErrorOnValidate => {
        if (noErrorOnValidate) {
          axios.put('/api/sys/roles/'+this.role_data.id, this.$data.role_data)
          .then((response) => {
            window.getApp.$emit('APP_UPDATE_ALL_ROLE_DATA')
            this.clear()
            this.showEditModel = (!this.showEditModel)
            this.showToastAlert('success', 'Operação efetuada com sucesso <i class="fa fa-arrow-right"></i>!')
            
          })
          .catch((err) => {console.log()})
        }
      });
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
  }
}
</script>

<style lang="css">
</style>
