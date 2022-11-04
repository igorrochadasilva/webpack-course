const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    //development: arquivos não minificados para melhor leitura.
    mode: 'production'
}