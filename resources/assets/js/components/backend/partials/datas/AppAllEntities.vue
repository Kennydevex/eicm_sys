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
        :items="entities"
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

          <td align="center">
            <template  v-if="props.item.description">
              <v-icon v-if="props.expanded" @click="props.expanded = !props.expanded" small>fa-minus</v-icon>
              <v-icon v-else @click="props.expanded = !props.expanded" small>fa-plus</v-icon>
            </template>
          </td>
          <td align="center">
            <v-btn outline icon dark color="warning" small @click="handleToggleEntityUpdateDialog(props.item.id)">
              <v-icon small>fa-pencil</v-icon>
            </v-btn>
            <v-btn outline icon dark color="error" small @click="onDeleteEntity(props.item.id)">
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

  <update-entity-form :entity="entity"></update-entity-form>
</div>


</template>

<script>
import UpdateEntityForm from '../widgets/forms/entity/UpdateEntityForm.vue'
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
      entity: [],
    }
  },

  components: {
    UpdateEntityForm,
  },

  created: function () {
    this.getEntities()
    window.getApp.$on('APP_UPDATE_ALL_ENTITIES_DATA', () => {
      this.getUpdatedEntities()
    });
  },

  computed: {
    entities: function () {
      return this.$store.getters.entities
    },
  },

  methods: {
    handleToggleEntityUpdateDialog (entity_id) {
      this.getSingleEntity(entity_id)
      window.getApp.$emit('APP_ENTITY_UPDATE_DIALOG', this.entity)
    },

    getEntities: function () {
      if(this.entity.length){
        return
      }
      this.getUpdatedEntities()
    },

    getUpdatedEntities: function () {
      this.$store.dispatch('getEntities')
    },

    getSingleEntity: function (entity_id) {
      if (this.entities.length) {
        this.entity = this.entities.find((entity)=>entity.id == entity_id)
      }else {
        axios.get('/api/helpers/entities/'+entity_id)
        .then((response)=>{
          this.entity = response.data.data
        })
        .catch((error)=>{
        });
      }
    },

    onUpdateEntity: function (entity_id) {
      console.log('Utilizador a ver e: '+entity_id)
    },

    onGetEntity: function (entity_id) {
      console.log('Permissao: '+entity_id)
    },

    onDeleteEntity: function (entity) {
      this.$swal({
        title: 'Eliminar Permissão',
        text: "Ação irreversível, queres continuar?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, Apagar!',
        cancelButtonText: 'Não, Cancelar!'
      }).then((result) => {
        if (result.value) {
          this.deleteEntity(entity)
        }else if (result.dismiss === this.$swal.DismissReason.cancel) {
          this.showToastAlert('error', 'Operação cancelada!')
        }
      })
    },

    deleteEntity: function (entity_id) {
      axios.delete('/api/helpers/entities/'+entity_id)
      .then((response) => {
        this.getUpdatedEntities()
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
    else this.selected = this.entity.slice()
  },

}


}
</script>

<style lang="css">
</style>
