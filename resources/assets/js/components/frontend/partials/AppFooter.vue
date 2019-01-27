<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="blue darken-4">
        <strong class="subheading">Estamos ligados nas Redes Sociais</strong>
  
        <v-spacer></v-spacer>
  
        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
  
      <v-card-text class="grey darken-4">
        <v-container grid-list-sm,xs text-xs-center fluid>
          <v-layout row wrap>
            <v-flex xs12 sm4 pa-3>
              <h3>SUBSCRIÇÃO</h3>
  
              <v-divider></v-divider>
              <v-card color="transparent" flat>
                <v-card-title primary-title>Subscreva para aconpanhar os eventos da escola</v-card-title>
                <v-card-text>
                  <v-layout row wrap>
  
                    <v-flex xs8>
                      <v-text-field color="primary" name="name" id="app_subscribe" placeholder="Insira seu email aqui" box hint="Insira o seu email aqui, assim vais estar em dia com as novidades da Escola, e não só..." persistent-hint></v-text-field>
                    </v-flex>
                    <v-flex xs4>
                      <v-btn dark color="grey darken-3" large>
                        Enviar
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 pa-3>
              <h3>CURSOS</h3>
              <v-divider></v-divider>
  
  
              <v-btn flat small block>Artes Gráficas</v-btn>
  
  
              <v-btn flat small block>Contabilidades</v-btn>
  
  
              <v-btn flat small block>Construção Cívil</v-btn>
  
  
              <v-btn flat small block>Eletricidade</v-btn>
  
  
              <v-btn flat small block>Mecânica</v-btn>
  
  
              <v-btn flat small block>Mecanotecnia</v-btn>
  
  
              <v-btn flat small block>Informática de Gestão</v-btn>
  
  
  
            </v-flex>
            <v-flex xs12 sm4 pa-3>
              <h3>LIGAÇÕES EXTERNAS</h3>
  
              <v-divider></v-divider>
              
                <v-btn flat small block>Ministério de Educação</v-btn>
              
              
                <v-btn flat small block>Dieração Geral do Ensino Superior</v-btn>
              
              
                <v-btn flat small block>Centro de Emprego e Formação Profissional</v-btn>
              
              
                <v-btn flat small block>Pro-Empresa</v-btn>
              
              
                <v-btn flat small block>UNICV</v-btn>
              
              
                <v-btn flat small block>FICASE</v-btn>
              
  
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
  
      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019 —
        <strong>EICM-GDC</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        "fa-facebook",
        "fa-twitter",
        "fa-google-plus",
        "fa-linkedin",
        "fa-instagram"
      ]
    })
  };
</script>

