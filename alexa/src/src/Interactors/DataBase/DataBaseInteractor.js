'use strict';

//Constantes de VIP.
const Attributes = require('../../Classes/Attributes');
const Libraries = require('../../Base/Libraries');

/**
 * Función MyDataBaseCall: encargada de devolver las llamadas a la base de datos, debe ser remplazada y se encuntra a modo de ejemplo.
 * @param  {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function MyDataBaseCall(attributes = new Attributes().init(attributes)){
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        try {
            console.VIPLog('MyDataBaseCall INIT');
            console.VIPLog('MyDataBaseCall ENDED');
            return Promise.resolve(attributes);
        } catch (error) {
            console.VIPError('MyDataBaseCall process try error: ' + error);
            throw new Error(error);
        };
    } catch (error) {
        console.VIPError('MyDataBaseCall try error: ' + error);
        throw new Error(error);
    }
}

module.exports.MyDataBaseCall = MyDataBaseCall;