# Seção 7: Recursos Avançados do Webpack

59. Introdução da seção.

60. Shimming 
- Utilizando o webpack providePlugin carregue automaticamente os módulos em vez de ter que importar ou exige-os em todos os lugares.
- Forma de não utilziar variaveis globais de módulo no código.
- Deixa o webpack se encarregar de invocar o módulo quando o encontrar.

61. Melhorando a performance de build
- Inserir um path para limitar as pastas dos loaders tem de serem executados.
- Utilizar o mínimo de plugins possível, e não utilizar plugins de produção.
- Utilizar servidor do webpackk, pois compila na memória, não no disco.
- Criar um chunk para o runtime, na configuração de optimization, definir runtimeChunk como true.

62. HMR na prática
- Hot module Replacement é uma funcionalidade que permite recarregar algumas funcionalidades sem buildar novamente.
- Pertence ao webpack server.
- Precisa adicionar a opção hot como true

63. Code Splitting
- Podemos dividir os arquivos de código que geramos pelo webpack.
- Em entry, definir arquivos separados.
- Necessário deixar output dinânimico.

64. Análise do bundle
- Checar projeto no site https://alexkuz.github.io/webpack-chart/
- Gerar arquivo json com comando npx webpack --profile --json=stats.json e utilizar no site.

65. Lazy Load
- Otimizar o carregamento da página carregando componente apenas quando for necessário.



