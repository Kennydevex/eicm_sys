<template>
  <v-container grid-list-xs fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-img :src="art_img_src" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>Located two hours south of Sydney in the
                <br>Southern Highlands of New South Wales, ...
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="primary" icon>Ler</v-btn>

            <!-- «««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««« -->
            <v-bottom-sheet v-model="sheet">
              <v-btn slot="activator" color="primary" dark flat icon>
                <v-icon>share</v-icon>
              </v-btn>
              <v-list>
                <v-subheader>Open in</v-subheader>
                <v-list-tile v-for="tile in tiles" :key="tile.title" @click="sheet = false">
                  <v-list-tile-avatar>
                    <v-avatar size="32px" tile>
                      <img
                        :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                        :alt="tile.title"
                      >
                    </v-avatar>
                  </v-list-tile-avatar>
                  <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-bottom-sheet>
            <!-- «««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««« -->
            <v-spacer></v-spacer>
            <v-btn flat color="orange" icon>
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn flat color="error" icon @click="onDeleteArticle(article.id)">
              <v-icon>delete</v-icon>
            </v-btn>
            <v-btn flat icon @click="dialog = true">
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <template v-for="article in articles">
        <v-flex xs3 :key="article.id">
          <v-card>
            <v-img :src="art_img_src" aspect-ratio="2.75"></v-img>

            <v-card-title primary-title>
              <h2 class="headline mb-0">{{article.title}}</h2>
            </v-card-title>

            <v-card-text>
              <!-- <span v-html="article.content"></span> -->
              <h4>{{ article.content|truncate(300)}}</h4> 

              <!-- <h4>{{ article.content|truncate(300)}}<v-btn @click="onViewArticle(article.id)" flat color="primary">Ler mais</v-btn></h4>  -->
            </v-card-text>
            <v-card-actions>
            <v-btn @click="onViewArticle(article.id)" flat color="primary" icon><v-icon>fa-eye</v-icon></v-btn>

              <!-- «««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««« -->
              <v-bottom-sheet v-model="sheet">
                <v-btn slot="activator" color="primary" dark flat icon>
                  <v-icon>share</v-icon>
                </v-btn>
                <v-list>
                  <v-subheader>Open in</v-subheader>
                  <v-list-tile v-for="tile in tiles" :key="tile.title" @click="sheet = false">
                    <v-list-tile-avatar>
                      <v-avatar size="32px" tile>
                        <img
                          src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                          :alt="tile.title"
                        >
                      </v-avatar>
                    </v-list-tile-avatar>
                    <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-bottom-sheet>
              <!-- «««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««« -->
              <v-spacer></v-spacer>
              <v-btn flat color="orange" icon @click="onUpdateArticle(article.id)">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn flat color="error" icon @click="onDeleteArticle(article.id)">
                <v-icon>delete</v-icon>
              </v-btn>
              <v-btn flat icon @click="dialog = true">
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>

      <!-- »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» -->
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">Use Google's location service?</v-card-title>

          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" flat="flat" @click="dialog = false">Disagree</v-btn>

            <v-btn color="green darken-1" flat="flat" @click="dialog = false">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» -->
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    art_img_src: "/images/app/articles/desert.jpg",

    article: [],
    dialog: false,
    sheet: false,
    tiles: [
      {
        img: "keep.png",
        title: "Keep"
      },
      {
        img: "inbox.png",
        title: "Inbox"
      },
      {
        img: "hangouts.png",
        title: "Hangouts"
      },
      {
        img: "messenger.png",
        title: "Messenger"
      },
      {
        img: "google.png",
        title: "Google+"
      }
    ]
  }),

  filters: {
    truncate: function(value, limit) {
      if (value.length > limit) {
        value = value.substring(0, limit - 3) + "...";
      }

      return value.replace(/(<([^>]+)>)/gi, "");
    }
  },

  
  created: function() {
    this.getArticles();
    window.getApp.$on("APP_UPDATE_ALL_ARTICLES_DATA", () => {
      this.getUpdatedArticles();
    });
  },

  computed: {
    articles: function() {
      return this.$store.getters.articles;
    }
  },

  methods: {
    getArticles: function() {
      if (this.articles.length) {
        return;
      }
      this.getUpdatedArticles();
    },

    getUpdatedArticles: function() {
      this.$store.dispatch("getArticles");
    },

    getSingleArticle: function(article_id) {
      if (this.articles.length) {
        this.article = this.articles.find(article => article.id == article_id);
      } else {
        axios
          .get("/api/cms/articles/" + article_id)
          .then(response => {
            this.article = response.data.data;
          })
          .catch(error => {});
      }
    },

    onUpdateArticle: function(article_id) {
      this.$router.push({
        path: "/dashboard/articles/update/"+article_id
      });
    },

    onViewArticle: function(article_id) {
      this.$router.push({
        path: "/dashboard/articles/view/"+article_id
      });
    },

    onGetArticle: function(article_id) {
      console.log("Função: " + article_id);
    },

    onDeleteArticle: function(article) {
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
          this.deleteArticle(article);
        } else if (result.dismiss === this.$swal.DismissReason.cancel) {
          this.showToastAlert("error", "Operação cancelada!");
        }
      });
    },

    deleteArticle: function(article_id) {
      axios
        .delete("/api/cms/articles/" + article_id)
        .then(response => {
          this.getUpdatedArticles();
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
    }
  }
};
</script>

<style lang="stylus" scoped>

</style>
