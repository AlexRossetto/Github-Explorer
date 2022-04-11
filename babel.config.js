module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    ['@babel/preset-react', {
      runtime: 'automatic' //Remove a necessidade de importar React em todos os arquivos jsx.
    }] //Passando configurações para o preset
  ]
}