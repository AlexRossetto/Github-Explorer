const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', //Permite que eu veja o código original ao invés do bundle no console USAR APENAS EM DEV.
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // Qual é o arquivo principal da aplicação.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }, //Arquivo resultante.
  resolve : {
    extensions: ['.js', '.jsx'] //Adiciona tipos de arquivos para leitura
  },
  devServer: { //Gera o bundle de forma automática sempre que salvamos qualquer alteração no arquivo 
    static: path.resolve(__dirname, 'public'), //Aonde está o conteúdo estático da aplição (HTML).
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }) //Referencia o arquivo bundle sem a necessidade de passar dentro do arquivo index.html
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/, //Verifico se o nome do arquivo termina com a extensão passada via regex.
        exclude : /node_modules/, //Ignorar essas pastas.
        use: 'babel-loader' //Integração entre babel e webpack.
      },
      {
        test: /\.scss$/, //Verifico se o nome do arquivo termina com a extensão passada via regex.
        exclude : /node_modules/, //Ignorar essas pastas.
        use: ['style-loader', 'css-loader', 'sass-loader'] //Pega o css da aplicação e aplica no bundle.
      } 
    ],
  } //Configuração de comportamento por tipo de arquivos.
};