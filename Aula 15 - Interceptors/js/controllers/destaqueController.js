angular.module("listaTelefonica")
    .controller("destaqueController", function ($scope, $routeParams, routeContato) {

        $scope.contato = routeContato.data;

    })