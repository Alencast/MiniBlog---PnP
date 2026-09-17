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


```

# Parte III: Requisitos do Sistema

## 3.1 Requisitos por Subsistema/Componente

O sistema é dividido nos seguintes subsistemas e componentes principais:

| Subsistema/Componente        | Responsabilidade                                                                                         |
| ---------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Frontend**                 | Disponibilizar a interface de interação com o usuário e permitir o acesso às funcionalidades do sistema. |
| **Autenticação**             | Permitir o cadastro, login e controle de acesso dos usuários.                                            |
| **Posts**                    | Permitir a criação, edição, exclusão e visualização de publicações.                                      |
| **Comentários**              | Permitir a inserção, visualização e gerenciamento de comentários nas publicações.                        |
| **Imagens**                  | Permitir o envio e a associação de imagens às publicações.                                               |
| **Backend / API**            | Processar as requisições do front, aplicar as regras de negócio e realizar a comunicação com o banco de dados.    |
| **Banco de Dados**           | Bando de dados local do Django para armazenar os dados dos usuários, publicações e comentários.                                              |
| **Armazenamento de Imagens** | Armazenar os arquivos de imagens enviados pelos usuários.                                                |

## 3.2 Requisitos Funcionais, Requisitos de Qualidade e Restrições

### 3.2.1 Requisitos Funcionais

| ID        | Requisito                                                                                                   |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| **RF001** | O sistema deve permitir o cadastro de novos usuários.                                                       |
| **RF002** | O sistema deve permitir que usuários cadastrados realizem login.                                            |
| **RF003** | O sistema deve permitir que usuários autenticados criem posts.                                              |
| **RF004** |                                      |
| **RF005** | O sistema deve permitir que usuários autenticados excluam seus posts.                                       |
| **RF006** | O sistema deve permitir a visualização dos posts publicados.                                                |
| **RF007** | O sistema deve permitir o envio de imagens associadas aos posts.                                            |
| **RF008** | O sistema deve permitir que usuários adicionem comentários aos posts.                                       |
| **RF009** | O sistema deve permitir a visualização dos comentários associados aos posts.                                |
| **RF010** | O sistema deve permitir o gerenciamento dos comentários conforme as permissões do usuário.                  |
| **RF011** | O sistema deve autenticar os usuários antes de permitir o acesso as funcionalidades restritas.              |

### 3.2.2 Requisitos de Qualidade

| ID        | Requisito                                                                                                                  |
| --------- | -------------------------------------------------------------------------------------------------------------------------- |
| **RQ001** | A interface deve permitir que o usuário identifique as principais funcionalidades do sistema.                |
| **RQ002** | O sistema deve restringir funcionalidades que necessitam de autenticação a usuários autenticados.  |
| **RQ003** | A comunicação entre o frontend e o backend deve ser realizada por meio de uma API REST.                         |
| **RQ004** | O sistema deve apresentar mensagens de erro quando uma operação não puder ser realizada.                                  |
| **RQ005** | O sistema deve manter os dados armazenados no banco de forma consistente durante as operações realizadas pelos usuários.                                   |

### 3.2.3 Restrições

| ID        | Restrição                                                                                                              |
| --------- | ---------------------------------------------------------------------------------------------------------------------- |
| **RE001** | O frontend do sistema deve ser desenvolvido utilizando React.                                                          |
| **RE002** | O backend deve ser desenvolvido utilizando Django REST Framework.                                                      |
| **RE003** | A comunicação entre frontend e backend deve utilizar uma API REST.                                                     |
| **RE004** | O acesso as funcionalidades que precisam de autenticação deve utilizar o mecanismo de autenticação definido pela aplicação. (no caso, o jwt) |
| **RE005** | O armazenamento das imagens deve ser realizado separadamente dos demais dados textuais da aplicação.                                              |

## 3.3 Interfaces

O sistema possui interfaces de usuário e interfaces de comunicação entre seus componentes.

### 3.3.1 Interface do Usuário

A interface do usuário será disponibilizada por meio de uma aplicação web desenvolvida em React. Por meio dela, o usuário poderá realizar as principais operações do sistema, como:

* Realizar cadastro e login;
* Visualizar posts;
* Criar e excluir posts;
* Enviar imagens;
* Visualizar os comentários;
* Adicionar comentários nas publicações.

### 3.3.2 Interface entre Frontend e Backend

O frontend realiza a comunicação com o backend por meio de uma API REST desenvolvida com Django REST.

As requisições são utilizadas para realizar operações relacionadas aos usuários, posts, comentários e imagens. As respostas da API são utilizadas pelo frontend para apresentar os dados e os resultados das operações realizadas.

### 3.3.3 Interface com o Banco de Dados

O banco de dados utilizado na aplicação é local. As informações relacionadas aos usuários, posts e comentários são persistidas por meio do backend, evitando que o frontend acesse diretamente o banco de dados.

### 3.3.4 Interface de Armazenamento de Imagens

As imagens enviadas pelos usuários são encaminhadas pelo backend para o mecanismo de armazenamento de arquivos da aplicação. Os dados necessários para relacionar as imagens às respectivas publicações são mantidos pela aplicação.
