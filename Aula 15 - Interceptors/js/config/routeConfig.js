angular.module("listaTelefonica")

    .config(function ($routeProvider) {
        $routeProvider.when("/contatos", {
            templateUrl: "view/contatos.html",
            controller: "listaController",
            resolve: {
                routeContatos: function (contatosAPI) {
                    return contatosAPI.getContatos();
                },
                routeOperadoras: function (operadoraAPI) {
                    return operadoraAPI.getOperadoras();
                }
            }
        })
            .when("/novo", {
                templateUrl: "view/novoContato.html",
                controller: "novoContatoController",
                resolve: {
                    routeOperadoras: function (operadoraAPI) {
                        return operadoraAPI.getOperadoras();
                    }
                }
            })
            .when("/destaque/:id", {
                templateUrl: "view/destaque.html",
                controller: "destaqueController",
                resolve: {
                    routeContato: function (contatosAPI, $route) {

                        return contatosAPI.getContato($route.current.params.id);
                    }
                }
            })
            .when("/error", {
                templateUrl: "view/error.html",
            });
        $routeProvider.otherwise({ redirectTo: "/contatos" });
    });