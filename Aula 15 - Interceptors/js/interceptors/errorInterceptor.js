/**
 * 
 * Interceptor responsável por visualizar o status das responses,
 * caso for um 404, ele redireciona para a página error.html
 * da pra definir para cada erro, não sei se vale a pena
 * 
 */
angular.module("listaTelefonica")
    // $q é uma promise, que são os métodos executados depois de uma chamada ajax
    // ou seja, quando uma mensagem é enviada ao servidor
    // a chamada ajax, cria uma promessa de que quando o servidor responder
    // tal function será executada, da pra criar isso com o $q;
    .factory("errorInterceptor", function ($q, $location) {
        return {
            responseError: function (rejection) {

                if (rejection.status === 404) {
                    $location.path("/error");
                }
                return $q.reject(rejection);
            }
        };
    })