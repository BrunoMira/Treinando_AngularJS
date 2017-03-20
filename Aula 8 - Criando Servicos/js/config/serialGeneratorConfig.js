/**
 * 
 * esse config, é executado durante a execução do provider, então
 * ele pode gerenciar as variáveis do provider que ele recebe por parametro
 * dá pra fazer uns negócios dahoras aqui, depois que eu entender como isso funciona
 * 
 */
angular.module("listaTelefonica")
    .config(function (serialGeneratorProvider) {
        serialGeneratorProvider.setLength(500);
    });