angular.module("listaTelefonica")

    .controller("novoContatoController", function ($scope, contatosAPI, serialGenerator, $location, routeOperadoras) {

        $scope.operadoras = routeOperadoras.data;

        $scope.adicionarContato = function (contato) {
            contato.serial = serialGenerator.generate();
            contato.data = new Date();
            contatosAPI.saveContato(contato)
                .then(function (data) {
                    delete $scope.novoContato;
                    $scope.contatoForm.$setPristine();
                    $location.path("/contatos");
                })

        };

    });