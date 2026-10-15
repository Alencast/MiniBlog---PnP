# Documento de Visão - MiniBlog

## 1. Identificação

| Item                    | Descrição                                                                     |
| ----------------------- | ----------------------------------------------------------------------------- |
| Produto                 | MiniBlog                                                                      |
| Tipo                    | Plataforma web de publicações e comentários                                   |
| Público principal       | Visitantes e usuários autenticados                                            |
| Documentos relacionados | Histórias de usuário nesta pasta e [diagramas UML](../../docs/diagramas/uml/) |

## 2. Visão do produto

O MiniBlog é uma plataforma web para que pessoas possam criar uma conta, acessar o sistema e compartilhar conteúdos em um feed. Usuários autenticados podem consultar publicações, criar e excluir seus conteúdos e interagir por meio de comentários.

O produto busca oferecer uma experiência simples de publicação e interação, com acesso controlado por autenticação e organização do feed por ordem de criação, das publicações mais recentes para as mais antigas.

## 3. Problema e oportunidade

Usuários precisam de um espaço centralizado para compartilhar informações e interagir com outros usuários sem depender de fluxos separados para cadastro, publicação e comentários. O MiniBlog reúne essas atividades em uma única aplicação, com uma área pública para entrada no sistema e uma área autenticada para consumo e produção de conteúdo.

## 4. Objetivos

- Permitir o autocadastro de novos usuários.
- Permitir a autenticação de usuários cadastrados.
- Disponibilizar um feed com as publicações de usuários.
- Permitir que usuários autenticados criem e excluam publicações.
- Permitir a consulta e a adição de comentários.
- Organizar o feed pelas publicações mais recentes.

## 5. Usuários e partes interessadas

### 5.1. Visitante

Pessoa que acessa o MiniBlog sem autenticação. Pode realizar o cadastro e acessar o fluxo de login.

### 5.2. Usuário autenticado

Pessoa cadastrada e autenticada no sistema. Pode consultar publicações e comentários, criar e excluir publicações e adicionar comentários.

### 5.3. Equipe de desenvolvimento

Responsável pela implementação, manutenção, documentação e evolução da aplicação.

## 6. Escopo do produto

### 6.1. Incluído no escopo atual

- Cadastro de usuário com nome de usuário, nome, senha e confirmação de senha.
- Validação de nome de usuário único.
- Validação de confirmação de senha.
- Login de usuários cadastrados.
- Consulta de publicações em um feed.
- Criação de publicações por usuários autenticados.
- Exclusão de publicações.
- Consulta de comentários.
- Adição de comentários.
- Ordenação do feed por data decrescente.

### 6.2. Fora do escopo documentado

Não fazem parte do escopo documentado atual funcionalidades como mensagens privadas, notificações, curtidas, seguidores, moderação administrativa, edição de publicações ou recuperação de senha. Essas funcionalidades podem ser avaliadas em uma evolução futura do produto.

## 7. Requisitos de alto nível

| ID    | Requisito                                                                   |
| ----- | --------------------------------------------------------------------------- |
| RV-01 | O sistema deve permitir que um visitante crie uma conta.                    |
| RV-02 | O sistema deve permitir que um usuário cadastrado se autentique.            |
| RV-03 | O sistema deve exibir as publicações disponíveis no feed.                   |
| RV-04 | O sistema deve permitir a criação de publicações por usuários autenticados. |
| RV-05 | O sistema deve permitir a exclusão de publicações.                          |
| RV-06 | O sistema deve permitir consultar e adicionar comentários.                  |
| RV-07 | O feed deve exibir as publicações da mais recente para a mais antiga.       |

## 8. Regras de negócio essenciais

- O nome de usuário usado no login deve ser único no sistema.
- A confirmação de senha deve ser igual à senha informada no cadastro.
- O feed deve apresentar as publicações em ordem decrescente de data.
- A criação e a interação com publicações dependem da autenticação do usuário.

## 9. Critérios de sucesso

O produto será considerado aderente à visão quando:

- um visitante conseguir concluir o cadastro com dados válidos;
- um usuário cadastrado conseguir acessar o sistema;
- o feed apresentar as publicações disponíveis na ordem esperada;
- um usuário autenticado conseguir publicar e excluir conteúdo;
- usuários autenticados conseguirem consultar e adicionar comentários;
- dados inválidos ou ações não autorizadas forem impedidos pelo sistema.

## 10. Premissas e restrições

- O acesso às operações de publicação e comentários requer autenticação.
- As histórias de usuário e os diagramas UML detalham os fluxos específicos derivados desta visão.
- A visão descreve o produto em alto nível; detalhes de implementação devem ser mantidos na documentação técnica e no código.

## 11. Evolução prevista

Novas funcionalidades devem ser avaliadas conforme as necessidades dos usuários e priorizadas sem comprometer os fluxos centrais de cadastro, autenticação, publicação e interação. Cada evolução deve atualizar as histórias de usuário, as regras de negócio e os diagramas afetados.
