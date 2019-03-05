<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs10>
        <router-view></router-view>
      </v-flex>
      <v-flex xs2>
        <v-layout row wrap>
          <v-flex xs12>
            publicidades
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
