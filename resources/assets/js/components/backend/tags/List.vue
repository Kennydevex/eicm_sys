y<template lang="html">
  <v-layout row wrap>
    <v-btn color="primary" class="elevation-1" :to="{name: 'new_tag'}">Criar</v-btn>
    <v-dialog v-model="editModel" max-width="700px">
      <v-card>
        <v-card-media
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        >
      </v-card-media>

      <v-card-title primary-title>
        <div>
          <div class="headline">{{tag.name}}</div>
          <span class="grey--text">{{tag.created_at}}</span>
          <v-divider vertical></v-divider>
          <span class="grey--text">{{tag.updated_at}}</span>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="purple" @click="onCancel">Fechar</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-slide-y-transition>
        <v-card-text v-show="show">
          {{tag.description}}
        </v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-dialog>


  <v-data-table
  :headers="headers"
  :items="tags"
  hide-actions
  class="elevation-1"
  >
  <template slot="items" slot-scope="props">
    <!-- <tr @click="props.expanded = !props.expanded"> -->
    <td>{{ props.item.name }}</td>
    <td class="text-xs-left">{{ props.item.description }}</td>
    <td class="text-xs-right">{{ props.item.created_at }}</td>
    <td class="text-xs-right">{{ props.item.updated_at }}</td>
    <td class="justify-center layout px-0">
      <v-icon
      small
      @click="onEdit(props.item.id)"
      class="mr-2"
      >
      fa fa-eye
    </v-icon>

  </td>
  <!-- </tr> -->
</template>
<!-- <template slot="expand" slot-scope="props">
<v-card flat>
<v-card-title primary-title>
Descricao
</v-card-title>
<v-divider></v-divider>
<v-card-text>{{ props.item.description }}</v-card-text>
</v-card>
</template> -->
</v-data-table>


</v-layout>
</template>

<script>
export default {
  name: 'list_tag',
  data () {
    return {
      show: false,
      tag: {},
      editModel: false,

      headers: [
        {
          text: 'Nome do Marcador',
          align: 'left',
          value: 'name'
        },
        {
          text: 'Descrição do Marcador',
          value: 'description',
        },
        {
          text: 'Data da criação',
          value: 'created_at'
        },
        {
          text: 'Data da atualização',
          value: 'updated_at'
        },
        {
          text: 'Actions',
          value: 'name',
          sortable: false
        }
      ],

    }
  },

  mounted: function () {

    // ####################################################################################
    //Verificando se marcador j]a se encontra em store
    if(this.tags.length){
      return
    }
    // ####################################################################################

    this.$store.dispatch('getTags')
  },

  computed: {
    tags: function () {
      return this.$store.getters.tags
    },

    currentUser: function () {
      return this.$store.getters.currentUser
    }
  },

  methods: {
    onEdit (tag_id) {
      this.editModel = true
      //Este condi;\ao ]e muito importante, porque assim a palica;\ao naoa precisa conectar servido a cada requisi;\ao,
      //E so pegar os dados que j]a esta\ao em local storage
      // ####################################################################################

      if (this.tags.length) {
        this.tag = this.tags.find((tag)=>tag.id == tag_id)
      }else {
        axios.get('/api/cmd/tag/'+tag_id)
        .then((response)=>{
          this.tag=response.data.tag

        })
        .catch((error)=>{
          // Describe error!
        });
      }
      // ####################################################################################

    },

    onCancel () {
      this.tag={}
      this.editModel = false
    },
  },

  // created: function () {
  //   //Valioda;\oes adicionais
  //   if (this.tags.length) {
  //     this.tags = this.tags.find((tag)=>tag.id==this.$route.id)
  //   }else {
  //     axios.get(`/api/cmd/tag/${this.$route.id}`, {
  //       headers: {
  //         "Authorization": `Bearer ${this.currentUser.token}`
  //       }
  //     })
  //     .then((response)=>{
  //       this.tag=response.data.tag
  //     })
  //     .catch((error)=>{
  //       // Describe error!
  //     });
  //   }
  // }


}
</script>

<style lang="css">
</style>
