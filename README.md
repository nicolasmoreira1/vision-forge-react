# Vision Forge React

Landing page e painel em React para o Challenge 2026 (JOVI) — Sprint 4, entrega conjunta de Front-End Design e Web Development.

## Tecnologias

- React 18
- React Router DOM 7 (rotas públicas e privadas)
- Tailwind CSS 4 (via plugin oficial do Vite)
- Vite 5
- JavaScript (ES Modules)
- API mockada em `public/api/captures.json` (consumo de dados na Central de Conteúdo)

## Requisitos

- Node.js 18.18 ou superior
- npm

## Instalação

```bash
npm install
```

## Execução

```bash
npm run dev
```

A aplicação sobe em `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

## Pré-visualização do build

```bash
npm run preview
```

## Back-end

O projeto não possui back-end próprio. A Central de Conteúdo funciona assim:

1. Na primeira visita, a lista de capturas vem de uma API mockada — o arquivo
   `public/api/captures.json`, servido pelo próprio Vite (e pela Vercel em produção) e consumido
   via `fetch` em `/api/captures.json` pelo hook `useFetch`.
2. A partir daí, a lista passa a viver no `localStorage` do navegador. O usuário pode adicionar e
   excluir capturas, e as alterações continuam lá quando a página é recarregada.
3. Se o usuário excluir todas as capturas, a lista fica vazia — ela não é recarregada da API.
   Para voltar à lista inicial, basta limpar a chave `vision-forge-captures` do `localStorage`.

Não é preciso subir nenhum servidor além do Vite.

## Rotas

| Rota | Tipo | Descrição |
| --- | --- | --- |
| `/` | Pública | Landing page da solução (solução, público-alvo, galeria, equipe e contato) |
| `/login` | Pública | Formulário de acesso ao painel |
| `/painel` | Privada | Central de Conteúdo: adicionar, excluir e buscar capturas por tema ou matéria |

Quem tenta abrir `/painel` sem estar logado é redirecionado para `/login`.

## Usuários e senhas para teste

| E-mail | Senha |
| --- | --- |
| aluno@visionforge.com | jovi2026 |

A sessão é simulada no `localStorage` do navegador — não há servidor de autenticação.

## Testes

A lógica de adicionar e remover capturas e a leitura do `localStorage` têm testes automatizados,
escritos com o `node:test` (test runner nativo do Node, sem dependência extra):

```bash
node --test src/hooks/useCaptures.test.js src/hooks/useLocalStorage.test.js
```

## Uso de IA

A IA (Claude) foi usada como apoio na migração do CSS para Tailwind, na criação dos hooks
customizados (`useAuth`, `useFetch`, `useCaptures`, `useLocalStorage`), na configuração das rotas
públicas e privadas e na revisão desta documentação. Todo o código gerado foi testado localmente
(`npm run build`, `node --test` e navegação manual nas três rotas) antes da entrega.

## Links de entrega

- GitHub: https://github.com/nicolasmoreira1/vision-forge-react
- Vercel: https://vision-forge-react.vercel.app/

## Integrantes

Consulte também o arquivo [INTEGRANTES.TXT](./INTEGRANTES.TXT).

- Leonardo Gracioli Barrocal - RM571031
- Henrique Vieira Ferreira - RM569586
- Lucas Trevisan - RM569731
- Nícolas Moreira Silva - RM571510
