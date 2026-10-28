# 📘 Projeto Pokédex

> Projeto acadêmico desenvolvido para a disciplina de **Intro. Desenvolvimento web** — **Universidade do Planalto Catarinense**.

Uma Pokédex web simples e interativa: o usuário digita o **nome** ou o **número** de um Pokémon e a aplicação exibe sua imagem e suas principais informações, consumindo dados em tempo real da [PokéAPI](https://pokeapi.co/).

---

## 📑 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Como Usar](#-como-usar)
- [Como Funciona](#-como-funciona)
- [API Utilizada](#-api-utilizada)
- [Melhorias Futuras](#-melhorias-futuras)
- [Equipe](#-equipe)
- [Aviso Legal](#-aviso-legal)

---

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de praticar, de forma aplicada, conceitos de desenvolvimento web estudados em aula:

- Estruturação de páginas com **HTML5**
- Estilização com **CSS3**
- Manipulação do DOM com **JavaScript**
- Consumo de uma **API REST** com `fetch`
- Tratamento de eventos e de respostas assíncronas

---

## ✨ Funcionalidades

- 🔍 **Busca por nome ou número** do Pokémon (ex.: `pikachu` ou `25`)
- 🖼️ **Imagem oficial** (*official artwork*) do Pokémon encontrado
- 📋 **Painel de informações** com:
  - Nome
  - Número na Pokédex
  - Tipo(s)
  - Altura (em metros)
  - Peso (em quilogramas)
- 🔊 **Som do Pokémon** ao pesquisar (disponível para Bulbasaur, Charmander, Eevee e Pikachu)
- ⚠️ **Aviso de erro** quando o Pokémon não é encontrado

---

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologia |
|-----------|------------|
| Estrutura | HTML5 |
| Estilo | CSS3 |
| Lógica | JavaScript (ES6+), sem frameworks |
| Dados | [PokéAPI](https://pokeapi.co/) via `fetch` |
| Editor | Visual Studio Code |
| Versionamento | Git e GitHub |

---

## 📁 Estrutura do Projeto

```
projeto-pokedex/
├── .vscode/
│   └── launch.json        # Configuração para depurar no Chrome (localhost:8080)
├── css/
│   └── style.css          # Estilos da aplicação
├── favicons/
│   └── favicon-16x16.png  # Ícone da aba do navegador
├── imgs/                  # Imagens da interface (moldura da Pokédex e sprites locais)
├── js/
│   └── script.js          # Lógica: busca na API e atualização da página
├── sons/                  # Sons (.mp3) dos Pokémon
├── index.html             # Página principal
└── README.md
```

---

## 🚀 Como Executar

Não é necessário instalar dependências. Você só precisa de um navegador atualizado e de conexão com a internet (para acessar a PokéAPI).

### 1. Clone o repositório

```bash
git clone https://github.com/pedrobezequielmelo/Projeto-Pokedex.git
cd Projeto-Pokedex
```

### 2. Abra o projeto

**Opção A — direto no navegador:** dê um duplo clique em `index.html`.

**Opção B — com servidor local (recomendado):**

```bash
# com Python
python -m http.server 8080

# ou com Node.js
npx serve -l 8080
```

Depois acesse `http://localhost:8080` no navegador.

> 💡 No VS Code, a extensão **Live Server** também funciona. O arquivo `.vscode/launch.json` já está configurado para abrir o Chrome em `http://localhost:8080`.

---

## 💡 Como Usar

1. Digite o **nome** (em inglês) ou o **número** de um Pokémon no campo de busca.
2. Clique em **pesquisar** (ou pressione `Enter`).
3. A imagem e o painel **Informações do Pokémon** serão atualizados.
4. Se o Pokémon tiver som cadastrado, ele será reproduzido automaticamente.

**Exemplos de busca:** `pikachu`, `charmander`, `eevee`, `bulbasaur`, `150`.

---

## ⚙️ Como Funciona

1. O usuário envia o formulário de busca.
2. O JavaScript impede o recarregamento da página e converte o texto para minúsculas.
3. É feita uma requisição `GET` para a PokéAPI:

   ```
   https://pokeapi.co/api/v2/pokemon/{nome-ou-numero}
   ```

4. Se a API responder **404**, é exibido o alerta *"Pokémon não encontrado!"*.
5. Caso contrário, os dados retornados (nome, id, tipos, altura, peso e imagem) são inseridos na página.
6. Se existir um arquivo de som para aquele Pokémon, o áudio é reproduzido.

---

## 🌐 API Utilizada

Os dados são fornecidos pela **[PokéAPI](https://pokeapi.co/)**, uma API REST pública e gratuita, sem necessidade de chave de acesso.

Campos utilizados da resposta:

| Campo da API | Uso na aplicação |
|--------------|------------------|
| `name` | Nome do Pokémon |
| `id` | Número na Pokédex |
| `types[].type.name` | Tipo(s) |
| `height` | Altura (dividida por 10 → metros) |
| `weight` | Peso (dividido por 10 → kg) |
| `sprites.other['official-artwork'].front_default` | Imagem do Pokémon |

---

## 🔮 Melhorias Futuras

- [ ] Botões de "anterior" e "próximo" para navegar entre os Pokémon
- [ ] Exibir estatísticas (HP, ataque, defesa, velocidade)
- [ ] Mostrar habilidades e cadeia de evoluções
- [ ] Substituir o `alert` por uma mensagem na própria interface
- [ ] Tratar erros de rede (falta de internet)
- [ ] Tocar o som de qualquer Pokémon (por exemplo, usando o *cry* disponível na PokéAPI)
- [ ] Layout totalmente responsivo para celulares

---

## 👥 Equipe

| Nome | GitHub |
|------|--------|
| Pedro Bezequiel Melo | [@pedrobezequielmelo](https://github.com/pedrobezequielmelo) |


**Professor(a):** Angela Arruda
**Curso:** Sistemas de Informaçao — **Semestre:** 1/2026
---

## ⚖️ Aviso Legal

Projeto desenvolvido exclusivamente para fins educacionais. Pokémon e todos os nomes, imagens e sons relacionados são marcas registradas da Nintendo, Game Freak e The Pokémon Company, e não possuem qualquer relação comercial com este projeto.
