# Documento de Visão do Sistema

## Parte I: Introdução

### 1.1 Objetivo do Sistema

O sistema tem como objetivo disponibilizar uma plataforma de miniblog par ao compartilhamento de informações e ocnteúdos entre seus usuários, permitindo a criação e publicação de posts, a inserção de comentários e o compartilhamento de imagens. A plataforma busca proporcionar uma forma simples e organizada de interação e troca de informações entre os usuários.

### 1.2 Escopo do Desenvolvimento do Sistema

O desenvolvimento do sistema ocntempla a implementaçã ode uma plataforma de miniblog voltada ao compartilhamento e a interação entre os usuários. O sistema permitirá o cadastro e autenticação de usuários, criação, edição e exclusão de posts, publicação de imagens, inserção e gerenciamento de comentários, além da visualização dos conteúdos publicados.

O escopo também inclui o desenvolvimento da interface de usuário, da API responsável pelas regras de negócio e do mecanismo de persistência dos dados.

**Tecnológias utilizadas:** React, Django REST

### Stakeholders

| Stakeholder | Papel/Responsabilidade | Interesse no Sistema |
|---|---|---|
| Usuário comum| Publica posts, imagens e comentários  | Compartilhar e consumir informações  |
| Desenvolvedor | Desenvolve e mantém o sistema  | Garantir o funcionamento, qualidade e a evolução do sistema  |
|  |  |  |

---

# Parte II: Visão Geral do Sistema

## 2.1 Visão e Objetivos do Sistema

O sistema consiste em uma plataforma de miniblog destinada ao compartilhamento de informações e conteúdos entre usuários. A plataforma permite que os usuários publiquem conteúdos, compartilhem imagens e interajam por meio de comentários, proporcionando um ambiente simples para comunicação e troca de informações.

### Objetivos

- Permitir a criação, publicação e visualização de posts pelos usuários.
- Possibilitar o compartilhamento de imagens associadas aos conteúdos publicados.
- Permitir a interação entre os usuários por meio de comentários. 

## 2.2 Contexto e Limite do Sistema

O sistema está inserido no contexto de uma plataforma de compartilhamento de informações e interação entre usuários por meio de publicações. Seu funcionamento envolve usuários, aplicação web, servidor responsável pelo processamento das requisições e banco de dados responsável pelo armazenamento das informações.

O sistema compreende as funcionalidades relacionadas ao gerenciamento de usuários, posts, imagens e comentários.

## 2.3 Estrutura Geral do Sistema

<!-- Apresente a estrutura geral do sistema, seus principais módulos, subsistemas ou componentes e como eles se relacionam. -->

```text
Sistema
├── Frontend
│   ├── Autenticação
│   ├── Posts
│   ├── Comentários
│   └── Usuários
├── Backend / API
│   ├── Gerenciamento de usuários
│   ├── Gerenciamento de posts
│   ├── Gerenciamento de comentários
│   └── Gerenciamento de imagens
├── Banco de Dados
│   ├── Banco local
│  
└── Componente/Subsistema 4
└── Armazenamento de Imagens
    └── Arquivos de imagens publicados