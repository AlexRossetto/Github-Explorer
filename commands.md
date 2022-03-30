//yarn init -y para criar package.json

//React-dom é a biblioteca que permite que o react interaja com o DOM.

//Babel tem o papel de transpilar o código javascript para uma linguagem que os novos / antigos navegadores possam entender.

//@babel/core é 99% das funcionalidades do babel. @babel/cli disponibiliza os comandos do babel no terminal e @babel/preset-env detecta o ambiente de desenvolvimento para trabalhar da melhor maneira de acordo com o ambiente.

//O nullish coalescing operator (ex: street.adress?.name) verifica se a variável que tentamos acessar é nula , caso for nula ele nao tenta acessar a propriedade para que não ocorra um erro.

//❯ yarn babel src/index.js --out-file dist/bundle.js para que o código seja transpilado e um arquivo resultante seja gerado.

//Webpack estipula uma série de configurações (chamados de loaders) que vai explicar para a aplicação como tratar cada tipo de arquivo , ele entao irá converter os tipos de arquivos para tipos que o browser entende.

//yarn webpack para executar o webpack.

//source-maps é uma forma de visualizar o código original da aplicação mesmo quando todo o código da aplicação está no bundle.

//NODE_ENV=production yarn webpack para rodar no ambiente desejado no linux.
