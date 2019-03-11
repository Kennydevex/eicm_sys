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


    handleShowCreateUserDialog () {
      window.getApp.$emit('APP_SHOW_CREATE_USER_DIALOG');
      this.$validator.reset()
      this.$refs.form.reset()

    },

    handleToggleCreatePermissionDialog () {
      window.getApp.$emit('APP_PERMISSION_CREATE_DIALOG')
      this.$validator.reset()
      this.$refs.form.reset()
    },

    handleToggleCreateRoleDialog () {
      window.getApp.$emit('APP_ROLE_CREATE_DIALOG')
    },
  },
}
