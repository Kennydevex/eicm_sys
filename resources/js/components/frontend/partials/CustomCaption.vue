<template lang="html">
  <v-card class="caption" width="300" height="400">
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
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

.caption {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 0;
  padding: 8px;
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.65);
  opacity: 1;
  transition: opacity 0.3s ease-in;
  z-index: 100;

}
.caption.display {
    opacity: 1;
}
</style>
