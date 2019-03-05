export const rolesPermissions = {
  computed: {
    roles: function() {
      return this.$store.getters.roles;
    },

    permissions: function() {
      return this.$store.getters.permissions
    },
  },


  methods: {
    getRoles() {
        if (this.roles.length) {
          return
        }
        this.getUpdatedRole()
      },

      getUpdatedRole() {
        this.$store.dispatch("getRoles")
      },

      //===========================================

      getPermissions() {
        if (this.permissions.length) {
          return
        }
        this.getUpdatedPermission()
      },

      getUpdatedPermission() {
        this.$store.dispatch("getPermissions")
      },
  },
}
