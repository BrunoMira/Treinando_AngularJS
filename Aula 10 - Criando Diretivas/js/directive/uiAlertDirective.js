
/**
 * 
 * Parte 1/3
 * 
 * Até aqui, pelo que entendi diretivas servem para criar templates
 * como por exemplo uma mensagem de erro, e você pode usar-la quantas vezes precisar
 * 
 * interessante é que funciona meio que dinamicamente, 
 * 
 */
angular.module("listaTelefonica")
    .directive("uiAlert", function () {
        return {
            // de onde ele vai pegar o template para ser inserido na view?
            // está definido aqui no templateUrl
            templateUrl: "view/alert.html",
            /**
             * para ele inserir o template, você precisa colocar uma marcação
             * neste exemplo a marcação é <ui-alert></ui-alert>, o mesmo nome da diretiva
             *  replace diz se o template irá substituir a marcação, ou se será inserida dentro da
             * marcação
             */
            replace: true,
            /**
             * você pode definir uma restrição, por exemplo
             * só podera ser inserido os templates, quando houver uma atributo ui-alert,
             * ou só quando houver a tag <ui-alert></... ou
             * ambas, etc.. no final do documento tem a relação de opções
             * 
             */
            restrict: "AE",
            /**
             *  a diretiva pode possuir um scope própria, assim perde-se a dependencia com o scope
             *  do controller, aqui eu posso definir as propriedades e de onde ele vem,
             * 
             *  o '@' quer dizer q esse dado vem de um atributo definido no tag que o template vai substituir,
             *  neste exemplo seria algo como <ui-alert title="algum texto"></... 
             *  
             *  Caso o nome do atributo da tag, for igual ao nome da propriedade desse scope, basta colocar @
             * 
             *  o '=' permite receber o conteúdo de um propriedade do scope do controller
             * 
             */
            scope: {
                //topic: "@title"
                title: "@",
                //error: "=message"
                message: "="
            },
            /**
             * o transclude permite utilizar o texto dentro a tag que será substituida
             * o plot aqui, é que esse texto vira um novo scope, uaaal
             * para incluir esse texto, você deve ir no template e definir onde esse texto será aplicado
             * usando a diretiva ng-transclude
             */
            transclude: true
        };
    });

    /**
     * 
     * restrict pode receber um ou mais opções que são:
     * A - Restrita ao Atributo
     * E - Restrita ao elemento
     * C - Restrita à classe
     * M - Restrita ao Comentário
     * 
     */