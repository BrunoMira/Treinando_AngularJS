angular.module("lista")
    .controller("listaController", function ($scope, $filter, $http) {
        $scope.listaTelefonica = [];


        $scope.operadoras = [];


        var carregarContatos = function () {
            $http.get("http://localhost:3412/contatos")
                .then(function (data) {
                    $scope.listaTelefonica = data.data;
                }, function () { });
        };

        var carregarOperadora = function () {
            $http.get("http://localhost:3412/operadoras").then(function (data) {
                // console.log(data.data)
                $scope.operadoras = data.data;
            }, function () { });
        };

        $scope.adicionarContato = function (contato) {
            contato.data = new Date();
            $http.post("http://localhost:3412/contatos", contato)
                .then(function (data) {
                    delete $scope.novoContato; $scope.contatoForm.$setPristine();
                    carregarContatos();
                    // ele recarrega os dados novamente, mas se a lista for muito grande, isso vai penalisar a performace
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