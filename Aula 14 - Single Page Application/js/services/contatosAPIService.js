/**
 * 
 * Aqui nós criamos uma factory, a diferença dela
 * é que ela é feita como uma function factory,
 * ou seja, você define as funções e depois
 * retorna um objeto com elas, meio que imitando
 * o comportamento de métodos de um objeto.
 * 
 */
angular.module("listaTelefonica")
    .factory("contatosAPI", function ($http, config) {

        var _getContatos = function () {
            return $http.get(config.baseUrl + "contatos");
        };

        var _saveContato = function (contato) {
            return $http.post(config.baseUrl + "contatos", contato);
        }
        var _getContato = function (id) {
            return $http.get(config.baseUrl + "contatos/" + id);
        }

        // Estou retornando um Objeto
        return {
            getContatos: _getContatos,
            saveContato: _saveContato,
            getContato: _getContato
        };
    });