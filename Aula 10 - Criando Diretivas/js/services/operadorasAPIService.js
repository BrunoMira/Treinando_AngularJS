/**
 * 
 * Aqui nós construimos um service, e a grande diferença
 * é que ele é baseado no Function Contruction, ou seja
 * ele imita um construtor, repare que existe uma this.
 * fazendo referença ao objeto que chamos esse 'construtor'
 * 
 * ===========================================================
 * como se fosse:
 * 
 * var getOperadoras = function(){
 *  return $http.get("http://localhost:3412/operadoras");
 * }
 *
 * var <Objeto> = function(getOperadoras){
 *  this.getOperadoras = getOperadoras;
 * }
 * =================================================================
 * essa chamada pode ser reescrita assim:
 * 
 * <Objeto>.call(operadoraAPI,function(){
 *      return $http.get("http://localhost:3412/operadoras");
 * })
 * 
 * =================================================================
 * 
 * são implementações do Javascript, por isso é um pouco estranho,
 * mas fica bem legal.
 */
angular.module("listaTelefonica")
    .service("operadoraAPI", function ($http, config) {
        this.getOperadoras = function () {
            return $http.get(config.baseUrl + "operadoras");
        };

    })