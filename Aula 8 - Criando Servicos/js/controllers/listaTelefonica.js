angular.module("listaTelefonica")
    /**
     * 
     * Fazendo a injeção de dependecia dos services/factorys para
     * comunicação com o back-end
     * 
     * contatosAPi foi feito baseado em factorys
     * operadoraAPI foi feito baseado em Service
     * e o serialGenerator é uma desculpa para ensinar Provider
     * 
     */
    .controller("listaController", function ($scope, $filter, contatosAPI, operadoraAPI, serialGenerator) {
        console.log(serialGenerator.generate());
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

            //Provider maroto que deu um nó na minha cabeça
            contato.serial = serialGenerator.generate();

            // eu poderia fazer o mesmo com a data ???
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