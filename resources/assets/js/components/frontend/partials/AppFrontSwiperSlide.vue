<template lang="html">
  <v-card>
    <swiper :options="swiperOption">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
  </v-card>
</template>

<script>
export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        swiperOption: {
          spaceBetween: 30,
          effect: 'fade',
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="scss" scoped>
  .swiper-slide {
    background-position: center;
    background-size: cover;
    &.slide-1 {
      background-image:url('https://placeimg.com/640/480/people')
    }
    &.slide-2 {
      background-image:url('https://placeimg.com/640/480/people')
    }
    &.slide-3 {
      background-image:url('https://placeimg.com/640/480/people')
    }
    &.slide-4 {
      background-image:url('https://placeimg.com/640/480/people')
    }
    &.slide-5 {
      background-image:url('https://placeimg.com/640/480/people')
    }
  }
</style>
