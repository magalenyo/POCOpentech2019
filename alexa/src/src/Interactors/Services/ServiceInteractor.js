'use strict';

//Constantes de VIP.
const Attributes = require('../../Classes/Attributes');
const Libraries = require('../../Base/Libraries');

/**
 * Función MyServiceCall: encargada de devolver las llamadas al servicio, debe ser remplazada y se encuntra a modo de ejemplo.
 * @param  {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function MyServiceCall(attributes = new Attributes().init(attributes)){
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        try {
            console.VIPLog('MyServiceCall INIT');
            console.VIPLog('MyServiceCall ENDED');
            return Promise.resolve(attributes);
        } catch (error) {
            console.VIPError('MyServiceCall process try error: ' + error);
            throw new Error(error);
        };
    } catch (error) {
        console.VIPError('MyServiceCall try error: ' + error);
        throw new Error(error);
    }
}

module.exports.MyServiceCall = MyServiceCall;