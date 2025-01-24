# Angular Rotas filhas

Este projeto é uma aplicação Angular que gerencia rotas para um sistema de login e um painel de administração. O painel contém seções como Início, Sobre e Contato, e utiliza um layout principal para exibir essas páginas.

## Estrutura de Rotas

- **`/`**: Página de Login
- **`/admin`**: Layout principal
  - **`/admin`**: Página inicial
  - **`/admin/sobre`**: Página Sobre
  - **`/admin/contato`**: Página Contato
- **`/**`**: Redirecionamento para o login (caso a rota não seja encontrada)

## Tecnologias Utilizadas

- **Angular 18**
- **HTML5 e CSS3**
- **TypeScript**
- Gerenciamento de rotas com `@angular/router`

## Estrutura de Componentes

- `AppComponent`: Componente raiz
- `LoginComponent`: Componente para a tela de login
- `MainLayoutComponent`: Layout principal para as páginas do painel
  - `HomeComponent`: Página inicial
  - `SobreComponent`: Página Sobre
  - `ContatoComponent`: Página Contato

## Instruções de Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/wellingtoncorreia/Rota-Filha.git
