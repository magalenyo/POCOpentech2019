'use strict';

//Constantes de VIP.
const Attributes = require('../Classes/Attributes');
const Apl = require('../Classes/Apl');
const Libraries = require('../Base/Libraries');

/**
 * Función initAttributes: permite recuperar de la sessión los atributos de Alexa.
 * @param {JSON} handlerInput
 * @returns {Attributes} attributes
 */
async function initAttributes(handlerInput) {
    printCurrentIntentName(handlerInput);

    console.VIPLog('handlerInput en initAttributes %j', handlerInput);

    let attributes = new Attributes();

    try {
        if (Object.keys(handlerInput.requestEnvelope.session).length !== 0) {
            console.VIPLog('Obtenemos los datos de sesión de Alexa')
            attributes.alexaInfo.init(handlerInput.requestEnvelope.session);
        }

        if (Object.keys(handlerInput.attributesManager.getSessionAttributes()).length !== 0) {
            console.VIPLog('Obtenemos el objeto Attributes desde la sesión')
            attributes.init(handlerInput.attributesManager.getSessionAttributes());
        }

        await setCurrentIntentName(handlerInput, attributes);

        console.VIPLog('Attributes inicializados correctamente %j', attributes);
        return attributes;

    } catch (error) {
        console.VIPError('Error en Attributes: ' + error);
        console.VIPWarning('Attributes inicializados con error %j', attributes);
        return attributes;
    }
}

/**
 * Función setCurrentIntentName: encargada de actualizar current y pprevious intent.
 * @param {JSON} handlerInput
 * @param {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function setCurrentIntentName(handlerInput, attributes = new Attributes().init(attributes)) {
    attributes.session.previousIntent = attributes.session.currentIntent;
    attributes.session.currentIntent = getCurrentIntentName(handlerInput);
}

/**
 * Función getCurrentIntentName: encargada de devolver el nombre del intent por el que estamos pasando.
 * @param  {JSON} handlerInput
 */
function getCurrentIntentName(handlerInput) {
    try {
        return handlerInput.requestEnvelope.request.intent.name;
    } catch (err) {
        return handlerInput.requestEnvelope.request.type;
    };
}

/**
 * Función saveAttributes: permite guardar los atributos de Alexa.
 * @param {JSON} handlerInput
 * @param {Attributes} attributes
 */
function saveAttributes(handlerInput, attributes = new Attributes().init(attributes)) {
    try {
        attributes.alexaInfo.clear();
        console.VIPLog('Borramos los datos de alexaInfo: %j', attributes);

        handlerInput.attributesManager.setSessionAttributes(attributes);
        console.VIPLog('Tenemos una respuesta desde la lógica de la intención: %j', attributes);
    } catch (error) {
        console.VIPError('saveAttributes try error: ' + error);
        throw new Error(error);
    }
}


/**
 * Función printCurrentIntentName: encargada de imprimir el nombre del intent por el que estamos pasando.
 * @param  {JSON} handlerInput
 */
function printCurrentIntentName(handlerInput) {
    try {
        console.VIPLog('intentName: ' + handlerInput.requestEnvelope.request.intent.name);
    } catch (err) {
        console.VIPLog('intentName: ' + handlerInput.requestEnvelope.request.type);
    };
}

/**
 * Función getErrorInView: permite retornar el responseBuilder de Alexa en caso de un error en la Vista.
  * @param {JSON} handlerInput
 * @param {Attributes} attributes
 */
async function getErrorInView(handlerInput) {
    return handlerInput.responseBuilder.speak(Libraries.TextConstants.ErrorSpeakText).reprompt(Libraries.UtilsVIP.getRepromptText()).getResponse();
}

/**
 * Función supportsDisplay: permite detectar si la ejecución se realiza en un dispositivo que posee pantalla
 * @param  {JSON} handlerInput
 * @returns {Boolean} hasDisplay
 */
function supportsDisplay(handlerInput) {
    var hasDisplay =
        handlerInput.requestEnvelope.context &&
        handlerInput.requestEnvelope.context.System &&
        handlerInput.requestEnvelope.context.System.device &&
        handlerInput.requestEnvelope.context.System.device.supportedInterfaces &&
        handlerInput.requestEnvelope.context.System.device.supportedInterfaces.Display
    return hasDisplay;
}

/**
 * Función supportsAPL: permite detectar si la ejecución se realiza en un dispositivo que posee pantalla y APL.
 * @param  {JSON} handlerInput
 * @returns {Boolean} hasDisplay
 */
function supportsAPL(handlerInput) {
    var hasDisplay =
        handlerInput.requestEnvelope.context &&
        handlerInput.requestEnvelope.context.System &&
        handlerInput.requestEnvelope.context.System.device &&
        handlerInput.requestEnvelope.context.System.device.supportedInterfaces &&
        handlerInput.requestEnvelope.context.System.device.supportedInterfaces['Alexa.Presentation.APL']
    return hasDisplay;
}

module.exports.initAttributes = initAttributes;
module.exports.getCurrentIntentName = getCurrentIntentName;
module.exports.saveAttributes = saveAttributes;
module.exports.supportsDisplay = supportsDisplay;
module.exports.supportsAPL = supportsAPL;
module.exports.getErrorInView = getErrorInView;
