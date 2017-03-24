/**
 * 
 * Interceptor que cria um efeito de loading nas requisições
 * na verdade quando houver um request ele cria uma váriavel loading
 * e atribui true, e quando houver um response, ele atribui false.
 * essa variável é criada no scope do controller da página.
 * 
 * ele colocou um time de 2 segundos antes do response prosseguir, dando um efeito de loading
 * 
 */
angular.module("listaTelefonica")
    .factory("loadingInterceptor", function ($q, $rootScope, $timeout) {
        return {
            request: function (config) {
                $rootScope.loading = true;
                return config;
            },
            requestError: function (rejection) {
                return $q.reject(rejection);
            },
            response: function (response) {
                $timeout(function () {
                    $rootScope.loading = false;
                }, 2000);
                return response;

            },
            responseError: function (rejection) {
                return $q.reject(rejection);
            }
        };
    });