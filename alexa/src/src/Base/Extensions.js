(function () {

    console.VIPLog = function (message, optionalParams) {
        console.log('✅\t' + message, optionalParams != undefined ? optionalParams : "");
    };

    console.VIPError = function (message, optionalParams) {
        console.error('🆘\t' + message, optionalParams != undefined ? optionalParams : "");
    };

    console.VIPWarning = function (message, optionalParams) {
        console.warn('⚠️\t' + message, optionalParams != undefined ? optionalParams : "");
    };

})();