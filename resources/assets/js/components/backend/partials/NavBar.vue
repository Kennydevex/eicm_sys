<template lang="html">
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="setDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  // props: ['drawer'],


  methods:{
    setDrawer(){
      // this.drawer = false
      this.$emit('test')
      // Es li e si nu cria enviaba um vento cu um parametro ou um model value
      // this.$emit.('eventname', this.variable)

    }
  }
}
</script>

<style lang="css">
</style>
