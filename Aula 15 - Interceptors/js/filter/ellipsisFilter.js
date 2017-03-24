/**
 * 
 * Criando um filtro que faz o seguinte
 * 
 * José da Silva Oliveira Redonda => José da Si...
 * 
 * ele substitui '...' depois de um número espeficidado lá na view( o size )
 * neste exemplo estamos utilizando 10
 * 
 */
angular.module("listaTelefonica")
    .filter("ellipsis", function () {
        // recebendo o input e a quantidade de caracteres
        return function (input, size) {
            //caso o nome seja pequeno, ele retorna o nome intacto
            if (input.length <= size) return input;
            // se não ele substitui depois de size letras por '...'
            // ele fez uma jogada muito dahora aqui
            // ele queria verificar se size fosse undefined, então ele fez essa expressão Booleana
            // da pra ler assim: se size for válido, use, ou se 2 for válido, use
            return input.substring(0, (size || 2)) + "...";
        }
    })