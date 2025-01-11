Funcionalidade: Cadastro de pessoa usuária

Cenário: Cadastro com dados válidos

  Dado que estou na página de cadastro
    E preencho o campo "Nome civil ou social" com "Alisson"
    E preencho o campo "Sobrenome" com "Gabriel"
    E preencho o campo "E-mail" com "alisson.testelacrei@gmail.com"
    E preencho o campo "Confirme seu e-mail" com "alisson.testelacrei@gmail.com"
    E preencho o campo "Senha" com "Senha@1234"
    E preencho o campo "Confirme sua Senha" com "Senha@1234"
    E marco a checkbox "Li e concordo com os Termos de Uso e Politica de Privacidade"
    E marco a checkbox "Tenho 18 anos ou mais"
  Quando clico no botão "Cadastrar"
  Então devo ser redirecionado para a página de confirmação de cadastro
    E devo ver a mensagem "Estamos quase lá..."


Funcionalidade: Cadastro de pessoa usuária

Cenário: Cadastro com campos obrigatórios em branco

  Dado que estou na página de cadastro
    E deixo o campo "Nome civil ou social" em branco
    E deixo o campo "Sobrenome" em branco
  Quando clico no botão "Cadastrar"
  Então devo permanecer na página de cadastro
    E devo ver as mensagens de erro:
      | Campo                 | Mensagem                              |
      | Nome civil ou social  | "Nome civil ou social é obrigatório." |
      | Sobrenome             | "Sobrenome é obrigatório."            |


Funcionalidade: Cadastro de pessoa usuária

Cenário: Cadastro com formato de e-mail inválido

  Dado que estou na página de cadastro
    E preencho o campo "Nome civil ou social" com "Alisson"
    E preencho o campo "Sobrenome" com "Gabriel"
    E preencho o campo "E-mail" com "alisson.testelacrei@"
  Quando clico no botão "Cadastrar"
  Então devo permanecer na página de cadastro
    E devo ver a mensagem de erro "Insira um e-mail válido."


Funcionalidade: Cadastro de pessoa usuária

Cenário: Confirmação de e-mail diferente

  Dado que estou na página de cadastro
    E preencho o campo "E-mail" com "alisson.testelacrei@gmail.com"
    E preencho o campo "Confirme seu e-mail" com "alisson.outro@gmail.com"
  Quando clico no botão "Cadastrar"
  Então devo permanecer na página de cadastro
    E devo ver a mensagem de erro "Os e-mails não correspondem, digite novamente."


Funcionalidade: Cadastro de pessoa usuária

Cenário: Senha e confirmação de senha diferentes

  Dado que estou na página de cadastro
    E preencho o campo "Senha" com "Senha@1234"
    E preencho o campo "Confirme sua Senha" com "Senha@123"
  Quando clico no botão "Cadastrar"
  Então devo permanecer na página de cadastro
    E devo ver a mensagem de erro "Senhas incompatíveis, tente novamente."


Funcionalidade: Cadastro de pessoa usuária

Cenário: Senha fraca

  Dado que estou na página de cadastro
    E preencho o campo "Senha" com "12345"
  Quando clico no botão "Cadastrar"
  Então devo permanecer na página de cadastro
    E devo ver a mensagem de erro "A senha deve ter no mínimo 8 caracteres."


Funcionalidade: Cadastro de pessoa usuária

Cenário: Checkboxes obrigatórias não marcadas

  Dado que estou na página de cadastro
    E deixo as checkboxes desmarcadas
  Quando clico no botão "Cadastrar"
  Então devo permanecer na página de cadastro
    E devo ver as mensagens de erro:
      | Campo                                   | Mensagem                        |
      | Termos de Uso e Política de Privacidade | "Você deve aceitar os termos." |
      | Idade mínima                            | "Você deve ter 18 anos ou mais."|