Funcionalidade: Edição de perfil de usuário

Cenário: Atualizar nome e sobrenome com sucesso

  Dado que estou na página de edição de perfil
    E preencho o campo "Nome civil ou social" com "Alisson"
    E preencho o campo "Sobrenome" com "Gabriel"
  Quando clico no botão "Salvar"
  Então devo ver a mensagem "Informações atualizadas com sucesso"
    E as informações atualizadas devem ser exibidas no meu perfil


Funcionalidade: Edição de perfil de usuário

Cenário: Atualizar com campo obrigatório vazio

  Dado que estou na página de edição de perfil
    E deixo o campo "Nome Civil ou Social" em branco
  Quando clico no botão "Salvar"
  Então devo permanecer na página de edição de perfil
    E devo ver a mensagem de erro "Nome deve ser preenchido"