# LAB01 - Sistema de Gerenciamento de Biblioteca

## Descrição

Aplicação desenvolvida em TypeScript que simula o gerenciamento de uma biblioteca pública.
O sistema permite cadastrar livros, registrar empréstimos e consultar a disponibilidade de um livro.

## Tecnologias utilizadas

- TypeScript
- Node.js
- ts-node

## Como executar

### 1. Instale as dependências necessárias

```bash
npm install -g typescript ts-node
```

### 2. Execute o programa

```bash
npx ts-node biblioteca.ts
```

## Testes realizados

- Cadastro de 3 livros no acervo (O Senhor dos Anéis, 1984, Dom Casmurro)
- Empréstimo do livro de código 1 (O Senhor dos Anéis)
- Consulta de disponibilidade do livro 1 → indisponível
- Consulta de disponibilidade do livro 2 → disponível

## Saída esperada no console

```
Livros cadastrados com sucesso.
Empréstimo do livro "O Senhor dos Anéis" registrado com sucesso.
Livro 1 não está disponível.
Livro 2 está disponível.
```