/**
 * 
 * configuração dos Interceptors, na verdade estou apenas acrescentando eles 
 * na lista de interceptors.
 * Creio eu que há mais configurações a serem feitas, e elas são definidas aqui 
 * 
 */

angular.module("listaTelefonica")
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push("timeStampInterceptor");
        $httpProvider.interceptors.push("errorInterceptor");
        $httpProvider.interceptors.push("loadingInterceptor");
    })