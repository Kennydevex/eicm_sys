<template lang="html">
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
    v-model="tag.name"
    :rules="nameRules"
    label="Nome"
    required
    ></v-text-field>
    <v-text-field
    solo
    v-model="tag.description"
    :rules="descriptionRules"
    label="Descricao"
    required
    multi-line
    ></v-text-field>

    <v-btn
    :disabled="!valid"
    @click="addTag"
    >
    submit
  </v-btn>


  <v-btn @click="clear">clear</v-btn>
  <v-btn :to="{name: 'tags_list'}">Cancelar</v-btn>
</v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    tag: {
      name: '',
      description: '',
    },
    nameRules: [
      v => !!v || 'Name is required',
    ],
    descriptionRules: [
      v => !!v || 'Descricao is required',
    ],
    errors: null
  }),
  methods: {
    addTag(){
      this.errors = null
      // const constraints = this.getConstraints()
      if (this.$refs.form.validate()) {
        axios.post('/api/cmd/tag/new', this.$data.tag)
        .then((response) => {this.$router.push({ name: 'tags_list'})})
      }
    },

    // getConstraints(){
    //   name: {
    //     presense: true,
    //     length: {
    //       minimun: 3,
    //       message: 'No m]inimo 3'
    //     }
    //   },
    //   description: {
    //     presense: true,
    //   }
    // }

    clear () {
      this.$refs.form.reset()
    }
  },
  computed: {
    currentUser: function () {
      return this.$store.getters.currentUser
    }
  }
}
</script>

<style lang="css">
</style>
