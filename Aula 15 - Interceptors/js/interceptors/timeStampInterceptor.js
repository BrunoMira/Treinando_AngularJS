/**
 * 
 * esse interceptor adiciona um parâmetro único no url da requisição
 * burlando os esquemas de cache do navegador, assim o navegador vai 
 * achar que é uma requisição nova e não vai puxar a última armazenada
 * 
 */
angular.module("listaTelefonica")
    .factory("timeStampInterceptor", function () {
        return {
            request: function (config) {
                var url = config.url;
                if (url.indexOf("view") > -1) return config;
                var timestamp = new Date().getTime();
                config.url = url + "?timestamp=" + timestamp
                console.log(config.url);
                return config;
            }
        }
    })