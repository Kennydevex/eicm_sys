<template>
  <div class="">
  <Featured-articles-caroucel></Featured-articles-caroucel>
    <app-all-articles></app-all-articles>
  </div>
</template>
<script>
import AppAllArticles from '../../../backend/partials/datas/AppAllArticles'
import FeaturedArticlesCaroucel from './FeturedArticlesCaroucel'
export default {
  name: "",
  data: () => ({

  }),
  components: {
    AppAllArticles,
    FeaturedArticlesCaroucel
  }
}
</script>
<style lang="scss" scoped>
</style>
