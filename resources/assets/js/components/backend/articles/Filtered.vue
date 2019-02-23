<template>
   <v-container grid-list-xs>
       <v-layout row wrap>
           <v-flex xs12>
             {{id}}
           </v-flex>
       </v-layout>
   </v-container>
</template>



<script>

export default {
  data() {
    return {
      id: this.$route.params.filter_key,

    };
  },


  created: function() {
    console.log(this.id);
    console.log('Aqui bem');
  },



};
</script>
