const readline = require('readline');

// Cria um interface readline para ler o input do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Cria um array para armazenar as propriedades
const properties = [];

// Define a função de entrada para o readline
function prompt() {
  rl.question('Digite uma propriedade CSS (ou digite SAIR para finalizar): ', (property) => {
    // Se o usuário digitar SAIR, ordena e imprime a lista de propriedades
    if (property === 'SAIR') {
      const sortedProperties = properties.sort();
      console.log(sortedProperties.join('\n'));
      rl.close();
    } else {
      // Caso contrário, adiciona a propriedade ao array e chama o prompt novamente
      properties.push(property);
      prompt();
    }
  });
}

// Chama a função de prompt para iniciar o loop
prompt();
