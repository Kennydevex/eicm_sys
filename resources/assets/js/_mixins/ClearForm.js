export const clearForm = {
  methods: {

    clear () {
      this.$validator.reset()
      this.$refs.form.reset()
    },
  }
}
