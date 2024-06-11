<h2>Frontend do Desafio full stack para o processo seletivo Bry </h2>

Para o desafio, foi usado a versão 17.3.7 do framework Angular. O projeto foi iniciado com a configuração --no-standalone, para que os componentes sejam declarados dentro de módulos.
As rotas são definidas em src/app/app-routing.module.ts, que assim como no backend, temos os métodos GET, POST, PATCH, DELETE. Cada rota tem seu componente, onde é feito toda a lógica. Além disso, employee e company tem seus próprios arquivos de service, que possuem as funções para realizar as requisições ao backend. 

<h3>Algumas melhorias para o frontEnd </h3>

<h4>Homepage:</h4> A pagina inicial poderia receber diretamente as tabelas de employees e companies, sem necessariamente uma barra de navegação.

<h4>Relação many to many:</h4> Embora backend seja capaz de estabelecer uma relação many to many, o frontend não ficou intuitivo para exercer a funcionalidade. Na pagina "Create Employee" por exemplo, ao em vez de usar a tag select do html, a utilização de checkboxes poderia proporcionar uma experiência melhor para a criação de um emlployee que faça parte de varias empresas.

<h4>Carregamento:</h4> Poderia ter sido adicionado uma lógica para adicionar uma animação de carregamento enquanto as requisições estão sendo processadas.
