# CEPRO - Sistema de Gestão de Vagas de Estágio

O **CEPRO** é uma plataforma abrangente de gerenciamento de vagas de estágio. Nosso objetivo é simplificar o processo de conexão entre empresas, instituições de ensino e estudantes em busca de oportunidades de carreira.

---

### Tecnologias Utilizadas

Este projeto utiliza um stack moderno para garantir um desenvolvimento rápido e eficiente.

* **[React](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces de usuário reativas e escaláveis.
* **[TypeScript](https://www.typescriptlang.org/)**: Superconjunto do JavaScript que adiciona tipagem estática, garantindo um código mais seguro e robusto.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build de alta performance que oferece um ambiente de desenvolvimento ágil.

---

### Design

O design da interface do usuário (UI) e a experiência do usuário (UX) foram detalhados no Figma. Você pode acessá-lo no link abaixo para visualizar os layouts e componentes do projeto.

* **[Figma - CEPRO](https://www.figma.com/design/7tZC0MoHYVEVBjESuFJ33I/CEPRO?node-id=1-2&p=f&t=D6JxITwqqKjk7afU-0)**

---

### Configuração e Execução do Projeto

Siga os passos abaixo para preparar o ambiente de desenvolvimento e executar a aplicação localmente.

1.  **Pré-requisitos**:
    Certifique-se de ter o **Node.js** (versão 18 ou superior) e o **npm** (ou **Yarn/pnpm**) instalados em sua máquina.

2.  **Clone o repositório**:
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd [pasta-do-seu-projeto]
    ```

3.  **Instale as dependências**:
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

4.  **Execute o servidor de desenvolvimento**:
    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    ```

A aplicação estará acessível em `http://localhost:5173` (ou a porta exibida no seu terminal).

---

### Boas Práticas de Desenvolvimento

Para manter a consistência e a qualidade do código, é importante seguir algumas diretrizes.

* **Componentização**: Crie componentes reutilizáveis e mantenha-os pequenos e com responsabilidades únicas.
* **Tipagem com TypeScript**: Use a tipagem do TypeScript de forma rigorosa para evitar erros comuns e melhorar a legibilidade do código.
* **Convenção de Nomenclatura**: Use o `camelCase` para nomes de variáveis e funções e o `PascalCase` para nomes de componentes.
* **Gitflow Básico**: Trabalhe em branches separadas para cada nova funcionalidade (`feat/`) ou correção de bug (`fix/`). Mantenha a branch `main` sempre limpa e funcional.

---
