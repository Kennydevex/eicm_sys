<template>
<v-container grid-list-xs,sm,md,lg,xl>
   <v-layout row wrap>

     <v-flex xs12>
       <v-card>
         <v-card-media src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" height="200px">
         </v-card-media>
         <v-card-title primary-title>
           <div>
             <h3 class="headline mb-0">headline</h3>
             <div>description</div>
           </div>
         </v-card-title>
         <v-card-actions>
           <v-btn flat color="primary">text</v-btn>
           <v-btn flat color="primary">text</v-btn>
         </v-card-actions>
       </v-card>
     </v-flex>

     <v-flex xs12>
       <v-layout row wrap>
         <v-flex xs12>
           <v-card color="primary" class="red--text">
             <v-container fluid grid-list-lg>
               <v-layout row>
                 <v-flex xs7>
                   <div>
                     <div class="headline">headline</div>
                     <div>description</div>
                   </div>
                 </v-flex>
                 <v-flex xs5>
                   <v-card-media
                     src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                     height="125px"
                     contain
                   ></v-card-media>
                 </v-flex>
               </v-layout>
             </v-container>
           </v-card>
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
