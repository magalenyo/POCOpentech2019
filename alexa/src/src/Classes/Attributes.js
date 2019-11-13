/**
 * Clase Attributes: encargada de manejar todos los parametros utilizados en la sessión.
 */
module.exports = class Attributes {
    constructor() {
        this.alexaInfo = new AlexaInfo();
        this.voiceResponse = new VoiceResponse();
        this.session = new Session();
        this.errorVIP = new ErrorVIP();
        this.myIntentSlot = new MyIntentSlot(); //Este objeto es sólo un ejemplo, debemos generar un objeto por cada uno de los Slots del Modelo.
        this.apl = new Apl();
    }
    clear() {
        this.alexaInfo = new AlexaInfo();
        this.voiceResponse = new VoiceResponse();
        this.session = new Session();
        this.errorVIP = new ErrorVIP();
        this.myIntentSlot = new MyIntentSlot();
        this.apl = new Apl();
    }
    init(values) {
        this.voiceResponse = new VoiceResponse().init(values.voiceResponse);
        this.session = new Session().init(values.session);
        this.errorVIP = new ErrorVIP().init(values.errorVIP);
        this.myIntentSlot = new MyIntentSlot().init(values.myIntentSlot);
        this.apl = new Apl().init(values.apl);
        return this;
    }
    toJSON() {
        return Object.getOwnPropertyNames(this).reduce((a, b) => {
            a[b] = this[b];
            return a;
        }, {});
    }
}

/**
 * Clase AlexaInfo: encargada de manejar todos los datos de informacion de Alexa.
 */
class AlexaInfo {
    constructor() {
        this.sessionId = '';
        this.userId = '';
        this.new = false;
    }
    clear() {
        this.sessionId = '';
        this.userId = '';
        this.new = false;
    }
    init(values) {
        this.sessionId = values.sessionId;
        this.userId = values.user ? values.user.userId : values.userId;
        this.new = values.new;
        return this;
    }
    toJSON() {
        return Object.getOwnPropertyNames(this).reduce((a, b) => {
            a[b] = this[b];
            return a;
        }, {});
    }
}

/**
 * Clase VoiceResponse: encargada de manejar todas las respuestas de voz.
 */
class VoiceResponse {
    constructor() {
        this.speakText = '';
        this.repromptText = '';
        this.speakTextScreen = '';
        this.repromptTextScreen = '';
    }
    clear() {
        this.speakText = '';
        this.repromptText = '';
        this.speakTextScreen = '';
        this.repromptTextScreen = '';
    }
    init(values) {
        this.speakText = values.speakText;
        this.repromptText = values.repromptText;
        this.speakTextScreen = values.speakTextScreen;
        this.repromptTextScreen = values.repromptTextScreen;
        return this;
    }
    toJSON() {
        return Object.getOwnPropertyNames(this).reduce((a, b) => {
            a[b] = this[b];
            return a;
        }, {});
    }
}

/**
 * Clase Session: encargada de manejar los datos de la sesión.
 */
class Session {
    constructor() {
        this.withShouldEndSession = false;
        this.needCard = false;
        this.cardsNeeded = [];
        this.errorRepeatTimes = 0;
        this.currentIntent = '';
        this.previousIntent = '';
    }
    clear() {
        this.withShouldEndSession = false;
        this.needCard = false;
        this.cardsNeeded = [];
        this.errorRepeatTimes = 0;
        this.currentIntent = '';
        this.previousIntent = '';
    }
    init(values) {
        this.withShouldEndSession = values.withShouldEndSession;
        this.needCard = values.needCard;
        this.cardsNeeded = values.cardsNeeded;
        this.errorRepeatTimes = values.errorRepeatTimes;
        this.currentIntent = values.currentIntent;
        this.previousIntent = values.previousIntent;
        return this;
    }
    toJSON() {
        return Object.getOwnPropertyNames(this).reduce((a, b) => {
            a[b] = this[b];
            return a;
        }, {});
    }
}

/**
 * Clase MyIntentSlot: encargada de manejar eun tipo de MySlotType.
 */
class MyIntentSlot {
    constructor() {
        this.MySlotType = '';
    }
    clear() {
        this.MySlotType = '';
    }
    init(values) {
        this.MySlotType = values.MySlotType;
        return this;
    }
    toJSON() {
        return Object.getOwnPropertyNames(this).reduce((a, b) => {
            a[b] = this[b];
            return a;
        }, {});
    }
}

/**
 * Clase ErrorVIP: encargada de manejar los errores de la arquitectura.
 */
class ErrorVIP {
    constructor() {
        this.errorType = '';
    }
    clear() {
        this.errorType = '';
    }
    init(values) {
        this.errorType = values.errorType;
        return this;
    }
    toJSON() {
        return Object.getOwnPropertyNames(this).reduce((a, b) => {
            a[b] = this[b];
            return a;
        }, {});
    }
}

/**
 * Clase Apl: Objeto que se encarga de manejar los datos de las pantallas APL.
 */
class Apl {
    constructor() {
        this.title = '';
        this.subtitle = '';
        this.bodyText = '';
    }
    clear() {
        this.title = '';
        this.subtitle = '';
        this.bodyText = '';
    }
    init(values) {
        this.title = values.title;
        this.subtitle = values.subtitle;
        this.bodyText = values.bodyText;
        return this;
    }
    toJSON() {
        return Object.getOwnPropertyNames(this).reduce((a, b) => {
            a[b] = this[b];
            return a;
        }, {});
    }
}