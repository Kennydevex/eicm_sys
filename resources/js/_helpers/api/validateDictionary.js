export default {
  attributes: {
    summary: 'resumo',
    first_name: 'Nome',
    last_name: 'Apelido',
    username: 'Utilizador',
    password: 'Palavra passe',
    password_confirmation: 'Confirmação',
    display_name: 'Rótulo',
  },
  custom: {

    title: {
      required: () => 'É obrigatório introduzir um título numa publicação',

    },
    image_file: {
      image: () => 'Selecione a rquivo do tipo imagem!!',
      required: () => 'É obrigatório inserir uma imagem na publicação',

    },

    summary: {
      reqrequireduire: () => 'Uma publicação tem de ter um resumo',
      max: () => 'Um resumo não deve passar de 200 caracteres',
    },

    category: {
      required: () => 'Escolha uma categoria!!',
    },
    start: {
      before: () =>
        'Data de início de uma publicação não pode ser superior a 6 meses',

    },

    end: {
      after: () => 'Data de fim não pode ser menor nem igual a data de início',

    },

    //===============================================================
    first_name: {
      required: () => 'É obrigatório introduzir um nome',

    },
    last_name: {
      required: () => 'É obrigatório introduzir um apelido',

    },

    username: {
      required: () => 'Insira um nome de utilizador',
    },

    password_confirmation: {
      confirmed: () => 'Não coencidem',
    },

    description: {
      required: () => "Campo de prenchimento obrigatório"
    },

    subject: {
      required: () => "É obrigatório escolher um assunto"
    },

    otherSubject: {
      required_if: () => "Tem de especificar um assunto"
    }



  }
}
