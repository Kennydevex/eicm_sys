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
        <v-data-table :headers="headers" :search="search" :items="categories" :rows-per-page-items="[5,10,25,50,{text:'All','value':-1}]" class="elevation-1" item-key="name" select-all v-model="selected" no-data-text="Aguardando resposta do servidor..." rows-per-page-text="Linhas por página">
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
            <v-btn outline icon dark color="warning" small @click="handleToggleCategoryUpdateDialog(props.item.id)">
              <v-icon small>fa-pencil</v-icon>
            </v-btn>
            <v-btn outline icon dark color="error" small @click="onDeleteCategory(props.item.id)">
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

  <update-category-form :category="category"></update-category-form>
</div>


</template>

<script>
  import UpdateCategoryForm from "../widgets/forms/category/UpdateCategoryForm.vue";
  export default {
    data() {
      return {
        dialog: false,
        search: "",
        selected: [],
        headers: [{
            text: "Nome",
            value: "name"
          },
          {
            text: "Descrição",
            value: "description",
            align: "center"
          },
          {
            text: "Operação",
            value: "",
            align: "center",
            sortable: false
          }
        ],
        category: []
      };
    },
  
    components: {
      UpdateCategoryForm
    },
  
    created: function() {
      this.getCategories();
      window.getApp.$on("APP_UPDATE_ALL_CATEGORIES_DATA", () => {
        this.getUpdatedCategories();
      });
    },
  
    computed: {
      categories: function() {
        return this.$store.getters.categories;
      },
  
    },
  
    methods: {
      handleToggleCategoryUpdateDialog(category_id) {
        this.getSingleCategory(category_id);
        window.getApp.$emit("APP_CATEGORY_UPDATE_DIALOG", this.category);
      },
  
      getCategories: function() {
        if (this.categories.length) {
          return;
        }
        this.getUpdatedCategories();
  
  
      },
  
      getUpdatedCategories: function() {
        this.$store.dispatch("getCategories");
      },
  
      getSingleCategory: function(category_id) {
        if (this.categories.length) {
          this.category = this.categories.find(
            category => category.id == category_id
          );
        } else {
          axios
            .get("/api/helpers/categories/" + category_id)
            .then(response => {
              this.category = response.data.data;
            })
            .catch(error => {});
        }
      },
  
      onUpdateCategory: function(category_id) {
        console.log("Utilizador a ver e: " + category_id);
      },
  
      onGetCategory: function(category_id) {
        console.log("Função: " + category_id);
      },
  
      onDeleteCategory: function(category) {
        this.$swal({
          title: "Eliminar Função",
          text: "Ação irreversível, queres continuar?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sim, Apagar!",
          cancelButtonText: "Não, Cancelar!"
        }).then(result => {
          if (result.value) {
            this.deleteCategory(category);
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            this.showToastAlert("error", "Operação cancelada!");
          }
        });
      },
  
      deleteCategory: function(category_id) {
        axios
          .delete("/api/helpers/categories/" + category_id)
          .then(response => {
            this.getUpdatedCategories();
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
        else this.selected = this.categories.slice();
      }
    }
  };
</script>

<style lang="css">
  
</style>
