<template lang="html">
  <div class="">
      <!-- ====================================================================== -->

      <!-- ====================================================================== -->
      <section>
        <AppMission></AppMission>
      </section>
      <!-- ====================================================================== -->
      <section>
        <AppTeam></AppTeam>
      </section>
      <!-- ====================================================================== -->
      <section>
        <AppBlog></AppBlog>
      </section>
      <!-- ====================================================================== -->
      <section>
        <AppContact></AppContact>
      </section>
      <!-- ====================================================================== -->
      <section>

      </section>
      <section>
      </section>
  </div>

</template>

<script>
// import AppCaroucel from '../partials/AppCaroucel.vue'
import AppMission from '../partials/AppMission.vue'
import AppSchoolMsg from '../partials/AppSchoolMsg.vue'
import AppBlog from '../partials/AppBlog.vue'
import AppContact from '../partials/AppContact.vue'
import AppTeam from '../partials/AppTeam.vue'

export default {
  components: {
    AppMission,
    AppSchoolMsg,
    AppTeam,
    AppBlog,
    AppContact,
  }

}
</script>

<style lang="css" scoped>

</style>
