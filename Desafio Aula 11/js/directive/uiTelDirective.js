angular.module("listaTelefonica")
    .directive("uiTel", function () {
        return {
            require: "ngModel",
            link: function (scope, element, attrs, ctrl) {
                var _formattel = function (tel) {
                    tel = tel.replace(/[^0-9]+/g, "");
                    if (tel.length > 1) {
                        tel = tel.substring(0, 0) + "(" + tel.substring(0, tel.length);
                    }

                    if (tel.length > 3) {
                        tel = tel.substring(0, 3) + ")" + tel.substring(3);
                    }

                    if (tel.length > 8 && tel.length <= 13) {
                        tel = tel.substring(0, 8) + "-" + tel.substring(8);
                    }
                    if (tel.length > 13) {

                        tel = tel.replace("-", "");
                        tel = tel.substring(0, 9) + "-" + tel.substring(9, 13);
                    }
                    return tel;
                }
                element.bind("keypress", function () {
                    ctrl.$setViewValue(_formattel(ctrl.$viewValue));
                    ctrl.$render();
                });

                ctrl.$parsers.push(function (value) {
                    if (value.length === 14) {
                        return value;
                    }
                })
            }
        }
    })
