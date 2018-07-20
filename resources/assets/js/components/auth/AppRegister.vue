<template lang="html">
  <div class="">
    <v-container grid-list-md>
      <v-layout wrap>

        <v-flex xs12 sm6>
          <v-text-field label="Legal first name" required></v-text-field>
        </v-flex>
        
        <v-flex xs12 sm6>
          <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
        </v-flex>

        <v-flex xs12>
          <v-text-field label="Email" required></v-text-field>
        </v-flex>

        <v-flex xs12>
          <v-text-field label="Password" type="password" required></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-select
          :items="['0-17', '18-29', '30-54', '54+']"
          label="Age"
          required
          ></v-select>
        </v-flex>
        <v-flex xs12 sm6>
          <v-autocomplete
          :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
          label="Interests"
          multiple
          chips
          ></v-autocomplete>
        </v-flex>
      </v-layout>
    </v-container>
    <small>*indicates required field</small>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="css" scoped>
.container{
  padding: 0;
}
</style>
