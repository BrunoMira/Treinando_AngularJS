/**
 * 
 * Controller da página de destaque
 * 
 */
angular.module("listaTelefonica")
    .controller("destaqueController", function ($scope, routeContato) {
        // recebendo os dados atráves do resolve das rotas
        $scope.contato = routeContato.data;

    })