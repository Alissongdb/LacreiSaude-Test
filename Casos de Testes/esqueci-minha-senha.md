Funcionalidade: Redefinição de senha

Cenário: Solicitar redefinição de senha com e-mail válido

  Dado que estou na página de redefinição de senha
    E preencho o campo "E-mail" com "usuario@exemplo.com"
  Quando clico no botão "Enviar Link"
  Então devo ver a mensagem "Verifique seu e-mail para redefinir a senha"
    E devo permanecer na página de redefinição de senha