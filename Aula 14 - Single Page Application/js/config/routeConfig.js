/**
 * 
 * script de configuração das rotas
 * o objetivo é direcionar à uma view e um controller de acordo com o
 * caminha desejado, e também , já faz as requisições à API, quando o
 * documento for carregado com a template, os dados já estaram disponíveis
 * 
 */
angular.module("listaTelefonica")

    .config(function ($routeProvider) {
        //definindo a rota /contatos
        $routeProvider.when("/contatos", {
            //ira carregar o index o arquivo contatos.html
            templateUrl: "view/contatos.html",
            //será controlado pelo listaController
            controller: "listaController",
            //e ira 'resolver' as dependencias com a API
            resolve: {
                routeContatos: function (contatosAPI) {
                    return contatosAPI.getContatos();
                },
                routeOperadoras: function (operadoraAPI) {
                    return operadoraAPI.getOperadoras();
                }
            }
        });
        $routeProvider.when("/novo", {
            templateUrl: "view/novoContato.html",
            controller: "novoContatoController",
            resolve: {
                routeOperadoras: function (operadoraAPI) {
                    return operadoraAPI.getOperadoras();
                }
            }
        });
        //definindo a rota e recebendo um parâmetro pela url
        $routeProvider.when("/destaque/:id", {
            templateUrl: "view/destaque.html",
            controller: "destaqueController",
            resolve: {
                routeContato: function (contatosAPI, $route) {
                    // uma maneira de recuperar o dado enviado como parâmetro
                    // é usando o $route
                    return contatosAPI.getContato($route.current.params.id);
                }
            }
        });
        // se nenhuma das rotas forem acionadas, será redirecionado para /contatos
        $routeProvider.otherwise({ redirectTo: "/contatos" });
    });