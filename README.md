Galeria simples utilizando dados da API do Reddit.

### Tecnologias Utilizadas

- React
- Gulp
- SCSS

### Endpoints

- /
- /login

### Sobre

- Na pagina principal, o app irá checar se o usuário está logado. Caso não esteja, uma mensagem aparecera com o link para o login, impedindo que seja mostrado a galeria.

  Se autenticado, a galeria estará disponível. Busque subreddits pela barra de pesquisa ou pelos específicos na header.

- Na pagina de login, há dois inputs, e-mail e senha. Ao inserir qualquer e-mail e senha (maior que 5 caracteres e contendo letras e números) validos, o usuário será autenticado por 30 minutos (pela razão de ser um teste).

  A autenticação é feita com JWT.
