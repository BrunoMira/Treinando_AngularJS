/**
 * 
 * este é um provider, a ideia dele é que o ciclo
 * de vida dele acontece antes da instanciação dos objetos(???)
 * nesse caso ele é chamado para entregar um serial de caracteres
 * 
 * primeiramente o número de caracteres era estatico, 
 * 
 * mas ele utilizou o conceito de config para poder gerenciar 
 * o número de caracteres que esse serial vai possuir
 * 
 * então ele criou uma variavel serial e 2 'métodos' para manipular ela
 * 
 * esses métodos serão utilizados pelo serialGeneratorConfig.js
 * 
 */
angular.module("listaTelefonica")

    .provider("serialGenerator", function () {
        var _length = 10;
        this.getLength = function () {
            return _length;
        }
        this.setLength = function (length) {
            _length = length;
        }
        this.$get = function () {
            return {
                generate: function () {
                    var serial = "";
                    while (serial.length < _length) {
                        serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                    }
                    return serial;
                }
            };
        };
    });