/**
 * 
 * esse value, serve como constantes para utilizar 
 * pelos componentes, acho que é esse serviço que eu utilizo para
 * criar a internacionalização da aplicação
 * 
 * ele pode ser value ou constant
 * a diferença é o ciclo de vida deles, o value
 * será executado no mesmo ciclo de vida da aplicação
 * 
 * já o constant tem um ciclo de vida inicial, igual ao config e provider
 * eles podem ser utilizados com esses 2 serviços, já o value não.
 * 
 */

angular.module("listaTelefonica")
    .value("config", {
        baseUrl: "http://localhost:3412/"
        /*
        .constant("config", {
            baseUrl: "http://localhost:3412/"
        */
    })