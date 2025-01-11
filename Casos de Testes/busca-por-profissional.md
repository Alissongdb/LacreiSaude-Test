Funcionalidade: Buscar por um profissional

Cenário: Busca por profissional existente

  Dado que estou na página de busca por profissional
    E preencho o campo "Busca por profissional" com "Dra. Ana Maria"
  Quando clico no botão "Pesquisar"
  Então devo ver uma lista de resultados
    E o profissional "Dra. Ana Maria" deve estar na lista

  
Funcionalidade: Buscar por um profissional

Cenário: Busca por profissionais de uma especialidade

  Dado que estou na página de busca por profissional
    E preencho o campo "Busca por profissional" com "Odontologia"
  Quando clico no botão "Pesquisar"
  Então devo ver uma lista de resultados
    E todos os profissionais listados devem ser da especialidade "Odontologia"


Funcionalidade: Buscar por um profissional

Cenário: Busca sem preencher o campo

  Dado que estou na página de busca por profissional
    E deixo o campo "Busca por profissional" em branco
  Quando clico no botão "Pesquisar"
  Então devo permanecer na página de busca
    E devo ver a mensagem de erro "Por favor, insira um nome ou especialidade para buscar."