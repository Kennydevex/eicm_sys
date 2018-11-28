<template lang="html">
  <div class="">
    <!-- ====================================================================== -->
    <section>
      <!-- <app-front-swiper-slide></app-front-swiper-slide> -->
      <app-front-slide-show></app-front-slide-show>
    </section>
    <!-- ====================================================================== -->
    <section>
      <app-mission></app-mission>
    </section>
    <!-- ====================================================================== -->
    <section>
      <app-messages></app-messages>
    </section>
    <!-- ====================================================================== -->
    <section>
      <app-team></app-team>
    </section>
    <!-- ====================================================================== -->
    <section>
      <app-blog></app-blog>
    </section>
    <!-- ====================================================================== -->
    <section>
      <app-contact></app-contact>
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
import AppFrontSlideShow from '../partials/AppFrontSlideShow.vue'
import AppFrontSwiperSlide from '../partials/AppFrontSwiperSlide.vue'
import AppMessages from '../partials/AppMessages.vue'

export default {
  components: {
    AppMission,
    AppSchoolMsg,
    AppTeam,
    AppBlog,
    AppContact,
    AppFrontSlideShow,
    AppFrontSwiperSlide,
    AppMessages,
  }

}
</script>

<style lang="css" scoped>

</style>
