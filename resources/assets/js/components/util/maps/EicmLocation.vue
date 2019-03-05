<template>
  <GmapMap
  :center="center"
  :zoom="7"
  map-type-id="terrain"
  style="width: 100%; height: 450px"
  >
  <GmapMarker
  :key="index"
  v-for="(m, index) in markers"
  :position="m.position"
  :clickable="true"
  :draggable="true"
  @click="center=m.position"
  />
</GmapMap>
</template>

<script>
export default {
  name: "",
  data: () => ({
    center: {lat:16.89255578445236, lng:-24.990666850294474},
    markers: [
      {
        position: {lat:16.89255578445236, lng:-24.990666850294474}
      },
      // {
      //   position: {lat:10.89255578445236, lng:-15.990666850294474}
      // }
    ]
  })
}
</script>
<style lang="scss" scoped>
</style>
