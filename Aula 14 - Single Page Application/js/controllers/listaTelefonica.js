/**
 * 
 * Controller da lista de contatos
 * 
 */
angular.module("listaTelefonica")
    .controller("listaController", function ($scope, serialGenerator, routeOperadoras, routeContatos) {
        // recebendo os dados pelo resolve da rota
        $scope.listaTelefonica = routeContatos.data;

        $scope.operadoras = routeOperadoras.data;

        var generateSerial = function (contatos) {
            contatos.forEach(function (item) {
                item.serial = serialGenerator.generate();
            });
        };

        $scope.apagarContato = function (contatos) {
            $scope.listaTelefonica = contatos.filter(function (contato) {
                if (!contato.selecionado) return contato;
            });

        };

        $scope.isContatoSelecionado = function (contatos) {
            return contatos.some(function (contato) {
                return contato.selecionado;
            });
        };

        $scope.ordenarPor = function (campo) {
            $scope.criterioOrdenacao = campo
            $scope.direcao = !$scope.direcao;
        }

        generateSerial($scope.listaTelefonica)

    });