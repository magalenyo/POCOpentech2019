'use strict';

//Constantes de VIP.
const Attributes = require('../Classes/Attributes');
const Apl = require('../Classes/Apl');
const Libraries = require('../Base/Libraries');
const View = require('../Base/View');

/**
 * Función getResponse: permite retornar el responseBuilder de Alexa.
 * @param {JSON} handlerInput
 * @param {Attributes} attributes
 */
function getResponse(handlerInput, attributes = new Attributes().init(attributes), apl = new Apl().init(apl)) {
    try {
        console.VIPLog('Response Case: ' + attributes.session.currentIntent);
        switch (attributes.session.currentIntent) {
            case 'LaunchRequest':
            case 'SessionEndedRequest':
            case 'AMAZON.CancelIntent':
            case 'AMAZON.StopIntent':
            case 'Restart':
            case 'Help':
            case 'SillyStuff':
            case 'Gratitude':
            case 'Hate':
            case 'ComingSoon':
            case 'NoFutureFuncionalities':
            case 'Greetings':
            case 'LegRoutine':
            case 'ArmRoutine':
            case 'NextExercise':
                return getGenericResponse(handlerInput, attributes, apl);
                break;
            default:
                console.VIPLog('APL Case: Default');
                return getGenericResponse(handlerInput, attributes, apl);
                break;
        }

    } catch (error) {
        console.VIPError('getResponse try error: ' + error);
        return handlerInput.responseBuilder.speak(Libraries.TextConstants.ErrorSpeakText).reprompt(Libraries.UtilsVIP.getRepromptText()).getResponse();
    };
}

/**
 * Función getGenericResponse: permite retornar el responseBuilder de Alexa.
 * @param {JSON} handlerInput
 * @param {Attributes} attributes
 */
function getGenericResponse(handlerInput, attributes = new Attributes().init(attributes), apl = new Apl().init(apl)) {
    try {
        if (View.ViewManager.supportsAPL(handlerInput)) {
            console.VIPLog('Dispositivo Con Pantalla y Soporta APL');
            return handlerInput.responseBuilder.speak(attributes.voiceResponse.speakTextScreen == '' ? attributes.voiceResponse.speakText : attributes.voiceResponse.speakTextScreen).reprompt(attributes.voiceResponse.repromptTextScreen == '' ? attributes.voiceResponse.repromptText : attributes.voiceResponse.repromptTextScreen).addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: apl.template,
                datasources: apl.datasource
            }).withShouldEndSession(attributes.session.withShouldEndSession).getResponse();
        } else {
            console.VIPLog('Dispositivo de Audio');
            return handlerInput.responseBuilder.speak(attributes.voiceResponse.speakText).reprompt(attributes.voiceResponse.repromptText).withShouldEndSession(attributes.session.withShouldEndSession).getResponse();
        }
    } catch (error) {
        console.VIPError('getGenericResponse try error: ' + error);
        return handlerInput.responseBuilder.speak(Libraries.TextConstants.ErrorSpeakText).reprompt(Libraries.UtilsVIP.getRepromptText()).getResponse();
    }
}

module.exports.getResponse = getResponse;