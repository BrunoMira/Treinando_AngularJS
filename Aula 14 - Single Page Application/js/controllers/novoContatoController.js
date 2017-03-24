/**
 * 
 * controller da página novo contato
 * 
 */
angular.module("listaTelefonica")
    //aqui eu possuo uma dependencia com o contatosAPI, pq eu ainda preciso utilizar o método de salvar do service
    //mas os das operadoras estão vindo pela rota, na routeOperadoras
    .controller("novoContatoController", function ($scope, contatosAPI, serialGenerator, $location, routeOperadoras) {

        $scope.operadoras = routeOperadoras.data;

        $scope.adicionarContato = function (contato) {
            contato.serial = serialGenerator.generate();
            contato.data = new Date();
            contatosAPI.saveContato(contato)
                .then(function (data) {
                    delete $scope.novoContato;
                    $scope.contatoForm.$setPristine();
                    //depois de salvar o contato, será redirecionado para /contatos
                    $location.path("/contatos");
                })

        };

    });