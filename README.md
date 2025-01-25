# JS Music 🎵

JS Music é uma aplicação web moderna para descobrir, pesquisar e criar playlists personalizadas com suas músicas favoritas diretamente do Deezer. Salve suas playlists para acessá-las quando desejar!

## 🚀 Funcionalidades

- 🔍 **Busca de Músicas**: Pesquise suas músicas favoritas no Deezer.
- ➕ **Adicionar à Playlist**: Adicione músicas à sua playlist personalizada.
- 💾 **Salvar Playlist**: Salve sua playlist no localStorage para não perder suas músicas.
- 🗑️ **Remover da Playlist**: Remova músicas da sua playlist a qualquer momento.
- 📱 **Responsividade**: Interface otimizada para todos os dispositivos, oferecendo uma experiência de usuário fluida.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, tornando o código mais seguro e fácil de manter.
- **CSS**: Estilos modernos com foco em responsividade e design clean.
- **Deezer API**: Para buscar músicas diretamente da plataforma Deezer.
- **Node.js & Express**: Servidor backend para interagir com a API do Deezer e manipular os dados.
- **Axios**: Cliente HTTP para realizar requisições à API do Deezer.

## 💻 Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:
    ```bash
    git clone https://github.com/JoaoGomesDev32/js-music.git
    cd js-music
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor frontend:
    ```bash
    npm start
    ```

4. Inicie o servidor backend para buscar músicas na API do Deezer:
    ```bash
    node server.js
    ```

5. Acesse a aplicação em seu navegador:
    ```
    http://localhost:3000
    ```

## 📂 Estrutura do Projeto

```plaintext
js-music/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Playlist.tsx
│   │   ├── Playlist.css
│   │   ├── SearchBar.tsx
│   │   ├── SearchBar.css
│   │   ├── TrackList.tsx
│   │   ├── TrackList.css
│   │   └── ...
│   ├── App.tsx
│   ├── App.css
│   ├── colors.css
│   ├── index.tsx
│   └── ...
├── server.js
├── package.json
└── README.md

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você quiser melhorar o projeto, basta abrir uma issue ou um pull request.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE.md para mais detalhes.

## 📬 Contato

João Silva
- GitHub: https://github.com/JoaoGomesDev32
- Email: joaogomesdev32@gmail.com

## 👏 Agradecimentos

- Agradecimentos à comunidade open-source por fornecer ferramentas incríveis para tornar este projeto possível.
- Inspirado em plataformas de música como Spotify e Apple Music.

---

Desenvolvido com ❤️ por João Silva
