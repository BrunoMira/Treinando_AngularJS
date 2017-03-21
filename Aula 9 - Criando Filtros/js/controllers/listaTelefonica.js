angular.module("listaTelefonica")

    .controller("listaController", function ($scope, $filter, contatosAPI, operadoraAPI, serialGenerator) {
        $scope.listaTelefonica = [];

        $scope.operadoras = [];

        var carregarContatos = function () {
            contatosAPI.getContatos()
                .then(function (data) {
                    $scope.listaTelefonica = data.data;
                }, function () { });
        };

        var carregarOperadora = function () {
            operadoraAPI.getOperadoras().then(function (data) {
                $scope.operadoras = data.data;
            }, function () { });
        };

        $scope.adicionarContato = function (contato) {


            contato.serial = serialGenerator.generate();

            contato.data = new Date();
            contatosAPI.saveContato(contato)
                .then(function (data) {
                    delete $scope.novoContato;
                    $scope.contatoForm.$setPristine();
                    carregarContatos();
                })

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

        carregarContatos();
        carregarOperadora();
    });