export const handleModels = {
  methods: {
    handleShowHideAuthModel() {
      window.getApp.$emit("APP_SHOW_AUTH_MODEL")
      this.$validator.reset()
      this.$refs.form.reset()
    },
    showAuthModel(){
      window.getApp.$emit('APP_SHOW_AUTH_MODEL')
    },
  },
}
