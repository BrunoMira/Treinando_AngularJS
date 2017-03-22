angular.module("listaTelefonica")
    .directive("uiCnpj", function () {
        return {
            require: "ngModel",
            link: function (scope, element, attrs, ctrl) {
                var _formatcnpj = function (cnpj) {
                    cnpj = cnpj.replace(/[^0-9]+/g, "");
                    if (cnpj.length > 2) {
                        cnpj = cnpj.substring(0, 2) + "." + cnpj.substring(2);
                    }
                    if (cnpj.length > 6) {
                        cnpj = cnpj.substring(0, 6) + "." + cnpj.substring(6);
                    }
                    if (cnpj.length > 10) {
                        cnpj = cnpj.substring(0, 10) + "/" + cnpj.substring(10);
                    }
                    if (cnpj.length > 14) {
                        cnpj = cnpj.substring(0, 14) + "-" + cnpj.substring(14, 16);
                    }

                    return cnpj;
                }
                element.bind("keyup", function () {
                    ctrl.$setViewValue(_formatcnpj(ctrl.$viewValue));
                    ctrl.$render();
                });

                ctrl.$parsers.push(function (value) {
                    if (value.length === 15) {
                        return value;
                    }
                })
            }
        }
    })