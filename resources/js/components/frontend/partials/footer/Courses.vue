<template>
  <v-flex xs12 sm4 pa-3>
    <h3 class="pb-3">CURSOS</h3>
    <v-divider></v-divider>


    <ul  class="links">
      <li><router-link :to="{ name: 'routeName', params: { property: value}}">Artes Gráficas</router-link></li>
      <li><router-link :to="{ name: 'routeName', params: { property: value}}">Contabilidades</router-link></li>
      <li><router-link :to="{ name: 'routeName', params: { property: value}}">Construção Cívil</router-link></li>
      <li><router-link :to="{ name: 'routeName', params: { property: value}}">Eletricidade</router-link></li>
      <li><router-link :to="{ name: 'routeName', params: { property: value}}">Mecânica</router-link></li>
      <li><router-link :to="{ name: 'routeName', params: { property: value}}">Mecanotecnia</router-link></li>
      <li><router-link :to="{ name: 'routeName', params: { property: value}}">Informática de Gestão</router-link></li>
    </ul>
  </v-flex>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
ul {
  display: block;
  list-style: none;
  margin-top: 1em;
  margin-bottom: 1em;

}

li {
  padding: 3px 3px;
  margin: 3px 3px;
}

a, a:active{
  font-size: 0.9em;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
}

a:hover{
  text-decoration:underline;
}
</style>
