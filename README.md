## Teste Lacrei Saude
* Neste projeto existem as pastas:
---
* Bugs: onde se encontram os bugs encontrados.
* Casos de Testes: encontram-se todos os casos de testes realizados.
* Testes de acessibilidade: testes realacionados a acessbilidade da plataforma.
* Testes de Responsividade: testes relacionados a responsividade a plataforma.
* Testes de Desempenho: testes relacionados ao desempenho da plataforma.

---
## Testes Automatizados - Lacrei Saúde
Este repositório contém os testes automatizados para a plataforma Lacrei Saúde, utilizando Cypress. Os testes cobrem as funcionalidades de buscar profissional, cadastro, login e outros casos de teste relacionados ao comportamento da plataforma.

🛠 Como configurar o ambiente de testes
1. Clonando o repositório

Primeiro, clone o repositório para o seu computador:

git clone https://github.com/SEU-USUARIO/repositorio.git

cd repositorio

2. Instalando as dependências

Instale as dependências necessárias utilizando o npm:

npm install

Isso irá instalar o Cypress e todas as bibliotecas necessárias para rodar os testes.

3. Configuração do Cypress

Certifique-se de que o Cypress esteja corretamente configurado em seu ambiente.

npm install cypress --safe-dev

4. Ambiente de teste

Verifique se a plataforma de testes está acessível em https://paciente-staging.lacreisaude.com.br/ para garantir que os testes possam ser executados corretamente.

🚀 Como executar os casos de teste
1. Executando os testes no Cypress

Com o ambiente configurado, você pode iniciar o Cypress com o seguinte comando:

npx cypress open

Este comando abrirá a interface gráfica do Cypress, onde você pode selecionar e executar os testes de forma interativa.

2. Executando os testes via linha de comando

Se preferir rodar os testes diretamente pela linha de comando, sem a interface gráfica, utilize:

npx cypress run

Isso executará todos os testes de maneira não interativa e você poderá visualizar os resultados no terminal.

3. Execução em um navegador específico

Você também pode rodar os testes em um navegador específico, como o Chrome:

npx cypress run --browser chrome

📄 Casos de Teste

Abaixo estão os principais casos de teste implementados no projeto:

Buscar Profissional: Testa a busca por profissionais na plataforma.

Cadastro Sucesso: Testa o fluxo de cadastro de um novo usuário com dados válidos.

Cadastro Falha: Testa o fluxo de cadastro de um novo usuário com dados inválidos.

Login Sucesso: Testa o fluxo de login com credenciais válidas.

Login Falha: Testa o fluxo de login com credenciais inválidas.