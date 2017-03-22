/**
 * 
 * criação de um grupo de testes que contraem e expandem
 * conforme você clica no cabeçalho deles (Accordion)
 * o interresante aqui é precisa controlar todos os 
 * accordions, mas não da pra fazer cada um deles se comunicarem
 * então ele criou um accordions que será pai dos outros
 * e também criou uma diretiva apenas para o pai
 * e programou o controller dos filhos, assim, todos deles
 * recebem os comandos
 * 
 */

angular.module("listaTelefonica")
    .directive("uiAccordions", function () {
        return {

            //definindo o controller dos accordion
            controller: function ($scope, $element, $attrs) {
                var accordions = [];

                // essa função vai acrescentar em uma arrays
                //todos os filhos dessa diretiva
                this.registerAccordion = function (accordion) {
                    accordions.push(accordion);
                };

                //essa função vai contrair todos os accordion
                this.closeAll = function () {
                    accordions.forEach(function (accordion) {
                        accordion.isOpened = false;
                    });
                }
            }
        }
    });

angular.module("listaTelefonica")
    .directive("uiAccordion", function () {
        return {

            //definindo onde os accordion estão
            templateUrl: "view/accordion.html",

            //dizendo que o conteúdo dentro da tag alvo
            //será reutilizado
            transclude: true,

            //pegando o title de um atributo da tag alvo
            scope: {
                title: "@"
            },
            // dizendo que esse accordion são filhos do 
            //accordions
            require: "^uiAccordions",
            link: function (scope, element, attrs, ctrl) {

                //usando o controller definido pelo pai
                //eles podem chamar as funções aqui
                ctrl.registerAccordion(scope);

                // ao clicar em um cabeçalho, esse função
                // é disparada, fechando todos os accordion
                //e abrindo apenas o que foi clicado
                scope.open = function () {
                    ctrl.closeAll();
                    scope.isOpened = !scope.isOpened;
                }
            }
        }
    });
