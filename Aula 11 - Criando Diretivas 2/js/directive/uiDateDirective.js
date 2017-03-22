/**
 * 
 * Essa diretiva tem como objetivo criar uma máscara no campo
 * data, enquanto ela esta sendo digitada.
 * precisaria realizar uma verificação emcima dos digitos, pois
 * ele está aceitando números inválidos
 * 
 * 
 */
angular.module("listaTelefonica")
    .directive("uiDate", function ($filter) {

        //a diretiva retorna um objeto, tipo a factory
        return {

            //aqui ele está criando um vínculo com o ngModel do scope do controller
            require: "ngModel",

            // função q permite inserir ou modificar o DOM
            link: function (scope, element, attrs, ctrl) {
                var _formatDate = function (date) {
                    //usando uma expressão regular para restringir a entrada de alfanumericos
                    date = date.replace(/[^0-9]+/g, "");
                    if (date.length > 2) {
                        date = date.substring(0, 2) + "/" + date.substring(2);
                    }
                    if (date.length > 5) {
                        date = date.substring(0, 5) + "/" + date.substring(5, 9);
                    }
                    return date;
                }
                // toda vez que pressionar uma tecla
                // ele atualiza a formatação
                element.bind("keyup", function () {
                    ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                    ctrl.$render();
                });

                //esse $parsers permite dizer quando esse campo
                // ficará disponível para o scope, aqui eu digo
                //que apenas quando a data estiver toda inserida, ele pode
                //repassar ao scope
                ctrl.$parsers.push(function (value) {
                    if (value.length === 10) {
                        var dateArray = value.split("/");
                        return new date(dateArray[2], dateArray[1] - 1, dateArray[0])
                    }
                });
                // definindo o formata que uma data já existente será exibida 
                ctrl.$formatters.push(function (value) {
                    return $filter("date")(value, "dd/MM/yyyy");
                });
            }
        };
    });