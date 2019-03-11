<template>
  <v-flex xs12 sm4 pa-3>
    <h3 class="pb-3">LIGAÇÕES EXTERNAS</h3>

    <v-divider></v-divider>
    <ul  class="links">
      <li><a href="#">Ministério de Educação</a></li>
      <li><a href="#">Dieração Geral do Ensino Superior</a></li>
      <li><a href="#">Centro de Emprego e Formação Profissional</a></li>
      <li><a href="#">Pro-Empresa</a></li>
      <li><a href="#">UNICV</a></li>
      <li><a href="#">FICASE</a></li>
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
  list-style-type: none;
  margin-top: 1em;
  margin-bottom: 1 em;
  margin-left: 0;
  margin-right: 0;
}

li {
  padding: 3px;
  margin: 3px;
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
