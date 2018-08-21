<template>
  <div id="user-form">
    <router-view></router-view>


  </div>
</template>

<script>
import CreareUserForm from '../partials/widgets/forms/CreateUserForm';

export default {
  components: {
    CreareUserForm,
  },
  
}

</script>

<style scoped>

</style>
