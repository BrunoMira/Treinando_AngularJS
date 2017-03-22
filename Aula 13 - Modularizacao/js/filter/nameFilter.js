/**
 * 
 * Criação de um filtro para o seguinte input
 *    bruno da silva => Bruno da Silva
 * ele pega uma string e coloca a primeira letra do nome em maisculo
 * 
 * eu posso receber injeção em filtro, apesar de não usar neste exemplo
 * 
 */
angular.module("listaTelefonica")
    .filter("name", function () {
        return function (input) {
            //quebra a string em um array, dividindo em casa espaço
            var listaNome = input.split(" ");
            // a função map, vai iterar em cada campo do array
            var formatado = listaNome.map(function (nome) {
                //expressão regular, muito maneira, onde ele verifica se 
                //o nome é 'da' ou 'de', se for só retorna a string
                if (/(da|de)/.test(nome)) return nome;
                // caso for um nome, ele aumenta a caixa da primeira letra
                // e reduz do resto, retornando o nome certinho
                return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
            })

            // aqui ele pega o arry e junto novamente em uma string, colocando um espaço entre elas
            // que coisa mais linda
            return formatado.join(" ");
        };
    });