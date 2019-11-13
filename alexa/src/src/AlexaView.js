'use strict';

//Constantes de Alexa
const Alexa = require('ask-sdk');
const skillBuilder = Alexa.SkillBuilders.custom();

//Constantes de VIP.
const Apl = require('./Classes/Apl');
const View = require('./Base/View');
const Presenter = require('./Base/Presenter');
const Extensions = require('./Base/Extensions');

//#region Chitchat

/**
 * Constante skillLaunchRequestHandler: Encargada de recibir la intención de inicio de Alexa.
 */
const skillLaunchRequestHandler = {
    canHandle(handlerInput) {
        const {
            request
        } = handlerInput.requestEnvelope;
        return (request.type === 'LaunchRequest');
    },
    async handle(handlerInput) {
        try {
            //Inicializamos el objeto de sessión de la arquitectura.
            let attributes = await View.ViewManager.initAttributes(handlerInput);

            //Llamamos a la lógica de la intención.
            await Presenter.GenericPresenter.getLaunchRequestMessage(attributes);

            //Guardamos el objeto de sessión de la arquitectura.
            View.ViewManager.saveAttributes(handlerInput, attributes);

            //Obtenemos la información del APL correspondiente al intent.
            let apl = new Apl();
            apl.aplIntentView = View.ViewManager.getCurrentIntentName(handlerInput);
            await View.APLBuilder.getAPL(attributes, apl);

            //Retornamos el objeto responseBuilder de Alexa. 
            return View.ResponseBuilder.getResponse(handlerInput, attributes, apl);

        } catch (error) {
            console.VIPError('skillLaunchRequestHandler try error: ' + error);
            return View.ViewManager.getErrorInView(handlerInput);
        };
    }
}

/**
 * Constante skillSessionEndedRequestHandler: Encargada de finalizar la sesión de Alexa.
 */
const skillSessionEndedRequestHandler = {
    canHandle(handlerInput) {
        const {
            request
        } = handlerInput.requestEnvelope;
        return (request.type === 'SessionEndedRequest') || (request.type === 'IntentRequest' && request.intent.name === 'AMAZON.CancelIntent') || (request.type === 'IntentRequest' && request.intent.name === 'AMAZON.StopIntent');
    },
    async handle(handlerInput) {
        try {
            //Inicializamos el objeto de sessión de la arquitectura.
            let attributes = await View.ViewManager.initAttributes(handlerInput);

            //Llamamos a la lógica de la intención.
            await Presenter.GenericPresenter.getSessionEndedRequestMessage(attributes);

            //Guardamos el objeto de sessión de la arquitectura.
            View.ViewManager.saveAttributes(handlerInput, attributes);

            //Obtenemos la información del APL correspondiente al intent.
            let apl = new Apl();
            apl.aplIntentView = View.ViewManager.getCurrentIntentName(handlerInput);
            await View.APLBuilder.getAPL(attributes, apl);

            //Retornamos el objeto responseBuilder de Alexa. 
            return View.ResponseBuilder.getResponse(handlerInput, attributes, apl);

        } catch (error) {
            console.VIPError('skillSessionEndedRequestHandler try error: ' + error);
            return View.ViewManager.getErrorInView(handlerInput);
        };
    }
}


/**
 * Constante skillRestartHandler: Encargada de reiniciar todo el entorno, deja la Skill en un estado similar a LaunchRequest.
 */
const skillRestartHandler = {
    canHandle(handlerInput) {
        const {
            request
        } = handlerInput.requestEnvelope;
        return (request.type === 'IntentRequest' && request.intent.name === 'Restart');
    },
    async handle(handlerInput) {
        try {
            //Inicializamos el objeto de sessión de la arquitectura.
            let attributes = await View.ViewManager.initAttributes(handlerInput);

            //Llamamos a la logica del intent.
            await Presenter.GenericPresenter.getRestartMessage(attributes);

            //Guardamos el objeto de sessión de la arquitectura.
            View.ViewManager.saveAttributes(handlerInput, attributes);

            //Obtenemos la información del APL correspondiente al intent.
            let apl = new Apl();
            apl.aplIntentView = View.ViewManager.getCurrentIntentName(handlerInput);
            await View.APLBuilder.getAPL(attributes, apl);

            //Retornamos el objeto responseBuilder de Alexa. 
            return View.ResponseBuilder.getResponse(handlerInput, attributes, apl);

        } catch (error) {
            console.VIPError('skillRestartHandler try error: ' + error);
            return View.ViewManager.getErrorInView(handlerInput);
        };
    }
}

/**
 * Constante skillHelpHandler: Encargada de maejar la ayuda de la Skill.
 */
const skillHelpHandler = {
    canHandle(handlerInput) {
        const {
            request
        } = handlerInput.requestEnvelope;
        return (request.type === 'IntentRequest' && request.intent.name === 'Help');
    },
    async handle(handlerInput) {
        try {
            //Inicializamos el objeto de sessión de la arquitectura.
            let attributes = await View.ViewManager.initAttributes(handlerInput);

            //Llamamos a la logica del intent.
            await Presenter.GenericPresenter.getHelpMessage(attributes);

            //Guardamos el objeto de sessión de la arquitectura.
            View.ViewManager.saveAttributes(handlerInput, attributes);

            //Obtenemos la información del APL correspondiente al intent.
            let apl = new Apl();
            apl.aplIntentView = View.ViewManager.getCurrentIntentName(handlerInput);
            await View.APLBuilder.getAPL(attributes, apl);

            //Retornamos el objeto responseBuilder de Alexa. 
            return View.ResponseBuilder.getResponse(handlerInput, attributes, apl);

        } catch (error) {
            console.VIPError('skillHelpHandler try error: ' + error);
            return View.ViewManager.getErrorInView(handlerInput);
        };
    }
}

/**
 * Constante skillRepeatHandler: Encargada de maejar la ayuda de la Skill.
 */
const skillRepeatHandler = {
    canHandle(handlerInput) {
        const {
            request
        } = handlerInput.requestEnvelope;
        return (request.type === 'IntentRequest' && request.intent.name === 'Repeat');
    },
    async handle(handlerInput) {
        try {
            //Inicializamos el objeto de sessión de la arquitectura.
            let attributes = await View.ViewManager.initAttributes(handlerInput);

            //Llamamos a la logica del intent.
            await Presenter.GenericPresenter.getRepeatMessage(attributes);

            //Guardamos el objeto de sessión de la arquitectura.
            View.ViewManager.saveAttributes(handlerInput, attributes);

            //Obtenemos la información del APL correspondiente al intent.
            let apl = new Apl();
            apl.aplIntentView = View.ViewManager.getCurrentIntentName(handlerInput);
            await View.APLBuilder.getAPL(attributes, apl);

            //Retornamos el objeto responseBuilder de Alexa. 
            return View.ResponseBuilder.getResponse(handlerInput, attributes, apl);

        } catch (error) {
            console.VIPError('skillRepeatHandler try error: ' + error);
            return View.ViewManager.getErrorInView(handlerInput);
        };
    }
}

/**
 * Constante skillSillyStuffHandler: Encargada de maejar el fallback de la Skill.
 */
const skillSillyStuffHandler = {
    canHandle(handlerInput) {
        const {
            request
        } = handlerInput.requestEnvelope;
        return (request.type === 'IntentRequest' && request.intent.name === 'SillyStuff');
    },
    async handle(handlerInput) {
        try {
            //Inicializamos el objeto de sessión de la arquitectura.
            let attributes = await View.ViewManager.initAttributes(handlerInput);

            //Llamamos a la logica del intent.
            await Presenter.GenericPresenter.getSillyStuffMessage(attributes);

            //Guardamos el objeto de sessión de la arquitectura.
            View.ViewManager.saveAttributes(handlerInput, attributes);

            //Obtenemos la información del APL correspondiente al intent.
            let apl = new Apl();
            apl.aplIntentView = View.ViewManager.getCurrentIntentName(handlerInput);
            await View.APLBuilder.getAPL(attributes, apl);

            //Retornamos el objeto responseBuilder de Alexa. 
            return View.ResponseBuilder.getResponse(handlerInput, attributes, apl);

        } catch (error) {
            console.VIPError('skillSillyStuffHandler try error: ' + error);
            return View.ViewManager.getErrorInView(handlerInput);
        };
    }
}

/**
 * Constante skillGratitudeHandler: Encargada de maejar la respuesta agradable de la Skill.
 */
const skillGratitudeHandler = {
    canHandle(handlerInput) {
        const {
            request
        } = handlerInput.requestEnvelope;
        return (request.type === 'IntentRequest' && request.intent.name === 'Gratitude');
    },
    async handle(handlerInput) {
        try {
            //Inicializamos el objeto de sessión de la arquitectura.
            let attributes = await View.ViewManager.initAttributes(handlerInput);

            //Llamamos a la logica del intent.
            await Presenter.GenericPresenter.getGratitudeMessage(attributes);

            //Guardamos el objeto de sessión de la arquitectura.
            View.ViewManager.saveAttributes(handlerInput, attributes);

            //Obtenemos la información del APL correspondiente al intent.
            let apl = new Apl();
            apl.aplIntentView = View.ViewManager.getCurrentIntentName(handlerInput);
            await View.APLBuilder.getAPL(attributes, apl);

            //Retornamos el objeto responseBuilder de Alexa. 
            return View.ResponseBuilder.getResponse(handlerInput, attributes, apl);

        } catch (error) {
            console.VIPError('skillGratitudeHandler try error: ' + error);
            return View.ViewManager.getErrorInView(handlerInput);
        };
    }
}

/**
 * Constante skillHateHandler: Encargada de maejar la respuesta de odio de la Skill.
 */
const skillHateHandler = {
    canHandle(handlerInput) {
        const {
            request
        } = handlerInput.requestEnvelope;
        return (request.type === 'IntentRequest' && request.intent.name === 'Hate');
    },
    async handle(handlerInput) {
        try {
            //Inicializamos el objeto de sessión de la arquitectura.
            let attributes = await View.ViewManager.initAttributes(handlerInput);

            //Llamamos a la logica del intent.
            await Presenter.GenericPresenter.getHateMessage(attributes);

            //Guardamos el objeto de sessión de la arquitectura.
            View.ViewManager.saveAttributes(handlerInput, attributes);

            //Obtenemos la información del APL correspondiente al intent.
            let apl = new Apl();
            apl.aplIntentView = View.ViewManager.getCurrentIntentName(handlerInput);
            await View.APLBuilder.getAPL(attributes, apl);

            //Retornamos el objeto responseBuilder de Alexa. 
            return View.ResponseBuilder.getResponse(handlerInput, attributes, apl);

        } catch (error) {
            console.VIPError('skillHateHandler try error: ' + error);
            return View.ViewManager.getErrorInView(handlerInput);
        };
    }
}

/**
 * Constante skillComingSoonHandler: Encargada de maejar la respuesta de de futuras funcionalidades de la Skill.
 */
const skillComingSoonHandler = {
    canHandle(handlerInput) {
        const {
            request
        } = handlerInput.requestEnvelope;
        return (request.type === 'IntentRequest' && request.intent.name === 'ComingSoon');
    },
    async handle(handlerInput) {
        try {
            //Inicializamos el objeto de sessión de la arquitectura.
            let attributes = await View.ViewManager.initAttributes(handlerInput);

            //Llamamos a la logica del intent.
            await Presenter.GenericPresenter.getComingSoonMessage(attributes);

            //Guardamos el objeto de sessión de la arquitectura.
            View.ViewManager.saveAttributes(handlerInput, attributes);

            //Obtenemos la información del APL correspondiente al intent.
            let apl = new Apl();
            apl.aplIntentView = View.ViewManager.getCurrentIntentName(handlerInput);
            await View.APLBuilder.getAPL(attributes, apl);

            //Retornamos el objeto responseBuilder de Alexa. 
            return View.ResponseBuilder.getResponse(handlerInput, attributes, apl);

        } catch (error) {
            console.VIPError('skillComingSoonHandler try error: ' + error);
            return View.ViewManager.getErrorInView(handlerInput);
        };
    }
}

/**
 * Constante skillNoFutureFuncionalitiesHandler: Encargada de maejar la respuesta de de funcionalidades que nunca formarán parte de la Skill.
 */
const skillNoFutureFuncionalitiesHandler = {
    canHandle(handlerInput) {
        const {
            request
        } = handlerInput.requestEnvelope;
        return (request.type === 'IntentRequest' && request.intent.name === 'NoFutureFuncionalities');
    },
    async handle(handlerInput) {
        try {
            //Inicializamos el objeto de sessión de la arquitectura.
            let attributes = await View.ViewManager.initAttributes(handlerInput);

            //Llamamos a la logica del intent.
            await Presenter.GenericPresenter.getNoFutureFuncionalitiesMessage(attributes);

            //Guardamos el objeto de sessión de la arquitectura.
            View.ViewManager.saveAttributes(handlerInput, attributes);

            //Obtenemos la información del APL correspondiente al intent.
            let apl = new Apl();
            apl.aplIntentView = View.ViewManager.getCurrentIntentName(handlerInput);
            await View.APLBuilder.getAPL(attributes, apl);

            //Retornamos el objeto responseBuilder de Alexa. 
            return View.ResponseBuilder.getResponse(handlerInput, attributes, apl);

        } catch (error) {
            console.VIPError('skillNoFutureFuncionalitiesHandler try error: ' + error);
            return View.ViewManager.getErrorInView(handlerInput);
        };
    }
}

/**
 * Constante skillGreetingsHandler: Encargada de maejar la respuesta de saludos de la Skill.
 */
const skillGreetingsHandler = {
    canHandle(handlerInput) {
        const {
            request
        } = handlerInput.requestEnvelope;
        return (request.type === 'IntentRequest' && request.intent.name === 'Greetings');
    },
    async handle(handlerInput) {
        try {
            //Inicializamos el objeto de sessión de la arquitectura.
            let attributes = await View.ViewManager.initAttributes(handlerInput);

            //Llamamos a la logica del intent.
            await Presenter.GenericPresenter.getGreetingsMessage(attributes);

            //Guardamos el objeto de sessión de la arquitectura.
            View.ViewManager.saveAttributes(handlerInput, attributes);

            //Obtenemos la información del APL correspondiente al intent.
            let apl = new Apl();
            apl.aplIntentView = View.ViewManager.getCurrentIntentName(handlerInput);
            await View.APLBuilder.getAPL(attributes, apl);

            //Retornamos el objeto responseBuilder de Alexa. 
            return View.ResponseBuilder.getResponse(handlerInput, attributes, apl);

        } catch (error) {
            console.VIPError('skillGreetingsHandler try error: ' + error);
            return View.ViewManager.getErrorInView(handlerInput);
        };
    }
}

/**
 * Constante skillSillyStuffHandler: Encargada de maejar el default de la Skill.
 */
const skillDefaultHandler = {
    canHandle(handlerInput) {
        const {
            request
        } = handlerInput.requestEnvelope;
        return true;
    },
    async handle(handlerInput) {
        try {
            //Inicializamos el objeto de sessión de la arquitectura.
            let attributes = await View.ViewManager.initAttributes(handlerInput);

            //Llamamos a la logica del intent.
            await Presenter.GenericPresenter.getSillyStuffMessage(attributes);

            //Guardamos el objeto de sessión de la arquitectura.
            View.ViewManager.saveAttributes(handlerInput, attributes);

            //Obtenemos la información del APL correspondiente al intent.
            let apl = new Apl();
            apl.aplIntentView = View.ViewManager.getCurrentIntentName(handlerInput);
            await View.APLBuilder.getAPL(attributes, apl);

            //Retornamos el objeto responseBuilder de Alexa. 
            return View.ResponseBuilder.getResponse(handlerInput, attributes, apl);

        } catch (error) {
            console.VIPError('skillDefaultHandler try error: ' + error);
            return View.ViewManager.getErrorInView(handlerInput);
        };
    }
}

//#endregion Chitchat

//#region APL.UserEvent

/**
 * Constante skillAPLUserEvent: Encargada de maejar los touch de APL.
 */
const skillAPLUserEvent = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'Alexa.Presentation.APL.UserEvent';
    },
    handle(handlerInput) {
        console.VIPLog('skillAPLUserEvent arguments[0]: ' + handlerInput.requestEnvelope.request.arguments[0]);
        switch (handlerInput.requestEnvelope.request.arguments[0]) {
            case 'Help':
                handlerInput.requestEnvelope.request.intent = { "name": "Help", "confirmationStatus": "NONE" };
                return skillHelpHandler.handle(handlerInput);
                break;
            default:
                return skillRestartHandler.handle(handlerInput);
                break;
        }
    }
};

//#endregion APL.UserEvent

exports.handler = skillBuilder
    .withApiClient(new Alexa.DefaultApiClient())
    .addRequestHandlers(
        skillLaunchRequestHandler,
        skillSessionEndedRequestHandler,
        skillRestartHandler,
        skillHelpHandler,
        skillRepeatHandler,
        skillSillyStuffHandler,
        skillGratitudeHandler,
        skillHateHandler,
        skillComingSoonHandler,
        skillNoFutureFuncionalitiesHandler,
        skillGreetingsHandler,
        skillAPLUserEvent,
        skillDefaultHandler // éste intent siempre tiene que estar de último.
    ).lambda();