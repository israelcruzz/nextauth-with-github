# Projeto Next.js com Autenticação NextAuth com o Github

Este projeto utiliza Next.js e NextAuth para implementar autenticação. Após o login bem-sucedido, o usuário é redirecionado para uma página de perfil que exibe a foto de perfil, repositórios, gists e seguidores do GitHub, com links para os dados em formato JSON.

## Telas

- **Login:**
  <img src="/my-app/public/thumb.png" width="100%" height="100%" />

- **Perfil:**
  <img src="/my-app/src/assets/images/thumb-info.png" width="100%" height="100%" />

## Funcionalidades

- **Autenticação:** Implementada via NextAuth, permitindo login seguro.
- **Tela de Login:** Página dedicada para os usuários se autenticarem.
- **Perfil do Usuário:** Página que exibe:
  - **Foto de Perfil:** Imagem do perfil do GitHub.
  - **Repositórios:** Lista de repositórios do GitHub.
  - **Gists:** Lista de gists do GitHub.
  - **Seguidores:** Lista de seguidores do GitHub.
- **Links para Dados em JSON:** Cada seção (repositórios, gists e seguidores) inclui um link para os dados em formato JSON diretamente da API do GitHub.

## Tecnologias Utilizadas

- **Next.js:** Framework React para desenvolvimento web.
- **NextAuth:** Biblioteca para autenticação em Next.js.
- **Tailwind CSS:** Utilizado para estilização (opcional).
- **Axios ou fetch API:** Para fazer chamadas à API do GitHub.
- **GitHub API:** Para obter dados do perfil do usuário autenticado.

## Pré-requisitos

- **Node.js:** Ambiente de execução JavaScript.
- **NPM ou Yarn:** Gerenciadores de pacotes.
- **Conta no GitHub:** Necessária para autenticação e obtenção de dados.
- **Credenciais OAuth do GitHub:** Necessárias para configuração do NextAuth.

## Instalação

1. **Clone o Repositório:** Faça o clone do repositório para sua máquina local.
2. **Instale as Dependências:** Utilize NPM ou Yarn para instalar todas as dependências necessárias.
3. **Configure as Variáveis de Ambiente:** Crie um arquivo `.env.local` e adicione as variáveis necessárias para o NextAuth e GitHub.
4. **Execute o Projeto:** Inicie o servidor de desenvolvimento para ver o projeto em ação.

## Configuração do NextAuth

Configurar o NextAuth é essencial para a autenticação. As credenciais do GitHub (client ID e client secret) devem ser configuradas corretamente nas variáveis de ambiente.

## Estrutura do Projeto

O projeto segue a estrutura padrão do Next.js com pastas para páginas, API, estilos e configurações adicionais.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para reportar problemas ou enviar pull requests com melhorias e correções.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

---

Este readme fornece uma visão geral do projeto, suas funcionalidades, tecnologias utilizadas, requisitos, etapas de instalação, configuração e como contribuir. Sinta-se à vontade para personalizá-lo conforme necessário para atender às especificidades do seu projeto.
