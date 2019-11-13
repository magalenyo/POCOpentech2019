'use strict';

//Constantes de VIP.
const Attributes = require('../Classes/Attributes');
const Apl = require('../Classes/Apl');
const Libraries = require('../Base/Libraries');

/**
 * Función getAPL: encargada de obtener el APL correspondiente.
 * @param  {Attributes} attributes
 * @param  {Apl} apl
 * @returns {Attributes} attributes
 */
async function getAPL(attributes = new Attributes().init(attributes), apl = new Apl().init(apl)) {
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        console.VIPLog('APL Case: ' + attributes.session.currentIntent);
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
                await getBackGroundView(attributes, apl);
                break;
            case 'LegRoutine':
            case 'ArmRoutine':
            case 'BreakRoutine':
            case 'NeedSupport':
                await getCustomBackGroundView(attributes,apl);
                break;
            default:
                console.VIPLog('APL Case: Default');
                await getBackGroundView(attributes, apl);
                break;
        }
        return Promise.resolve(attributes);

    } catch (error) {
        console.VIPError('getAPL try error: ' + error);
        attributes.speakText = Libraries.TextConstants.ErrorSpeakText;
        attributes.repromptText = Libraries.UtilsVIP.getRepromptText();
        return Promise.resolve(attributes);
    }
}

/**
 * Función getBackGroundView: encargada de obtener el APL del background.
 * @param  {Attributes} attributes
 * @param  {Apl} apl
 * @returns {Attributes} attributes
 */
async function getBackGroundView(attributes = new Attributes().init(attributes), apl = new Apl().init(apl)) {
    try {
        console.VIPLog('APL getBackGroundView INIT');
        apl.template = require('../APL/Index.json');
        apl.datasource = {};
        console.VIPLog('APL getBackGroundView END');
        return Promise.resolve(attributes);
    } catch (error) {
        console.VIPError('getBackGroundView try error: ' + error);
        throw new Error(error);
    }
}

/**
 * Función getCustomBackGroundView: encargada de obtener el APL del background.
 * @param  {Attributes} attributes
 * @param  {Apl} apl
 * @returns {Attributes} attributes
 */
async function getCustomBackGroundView(attributes = new Attributes().init(attributes), apl = new Apl().init(apl)) {
    try {
        console.VIPLog('APL getCustomBackGroundView INIT');
        apl.template = require('../APL/'+ attributes.apl.title +'.json');
        apl.datasource = {};
        console.VIPLog('APL getCustomBackGroundView END');
        return Promise.resolve(attributes);
    } catch (error) {
        console.VIPError('getCustomBackGroundView try error: ' + error);
        throw new Error(error);
    }
}

module.exports.getAPL = getAPL;