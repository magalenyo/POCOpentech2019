'use strict';

/**
 * Clase TextConstants: encargada de manejar todos los textos utilizados por las respuestas directas.
 */
class TextConstants {
    /**
     * Función getConstants: Retorna los textos utilizados por las FAQs de la aplicación.
     */
    static getConstants() {
        return {
            LaunchRequestSpeakTextScreen: ['<say-as interpret-as="interjection">Hola</say-as>, soy el Asistente de ChatBot Team. Estoy aquí para ayudarte con una plantilla. ¿Qué le gustaría consultar?', '<say-as interpret-as="interjection">Hola</say-as>, soy el Asistente de ChatBot Team. Estoy aquí para apoyarte en la creación de una Skill de Alexa. ¿Cuál le gustaría consultar?'],
            LaunchRequestRepromptTextScreen: ['<say-as interpret-as="interjection">Hola</say-as>, soy el Asistente de ChatBot Team. Estoy aquí para ayudarte con una plantilla. ¿Qué le gustaría consultar?', '<say-as interpret-as="interjection">Hola</say-as>, soy el Asistente de ChatBot Team. Estoy aquí para apoyarte en la creación de una Skill de Alexa. ¿Cuál le gustaría consultar?'],
            LaunchRequestSpeakText: ['<say-as interpret-as="interjection">Hola</say-as>, soy el Asistente de ChatBot Team. Estoy aquí para ayudarte con una plantilla. ¿Qué le gustaría consultar?', '<say-as interpret-as="interjection">Hola</say-as>, soy el Asistente de ChatBot Team. Estoy aquí para apoyarte en la creación de una Skill de Alexa. ¿Cuál le gustaría consultar?'],
            LaunchRequestRepromptText: ['<say-as interpret-as="interjection">Hola</say-as>, soy el Asistente de ChatBot Team. Estoy aquí para ayudarte con una plantilla. ¿Qué le gustaría consultar?', '<say-as interpret-as="interjection">Hola</say-as>, soy el Asistente de ChatBot Team. Estoy aquí para apoyarte en la creación de una Skill de Alexa. ¿Cuál le gustaría consultar?'],

            SessionEndedSpeakText: 'Muchas gracias por su consulta. Espero que volvamos a hablar pronto. <say-as interpret-as="interjection">Hasta luego</say-as>.',
            SessionEndedRepromptText: 'Muchas gracias por su consulta. Espero que volvamos a hablar pronto. <say-as interpret-as="interjection">Hasta luego</say-as>.',

            RestartSpeakText: 'De acuerdo., volvamos a empezar ¿Qué desea hacer?',
            RestartRepromptText: 'De acuerdo., volvamos a empezar ¿Qué desea hacer?',

            HelpSpeakText: 'Puedo ayudarle con muchas cosas, ¿Qué desea hacer?',
            HelpRepromptText: 'Puedo ayudarle con muchas cosas, ¿Qué desea hacer?',

            SillyStuffSpeakText: ['Disculpe, no le he entendido bien. ¿Le importaría repetir de nuevo?', 'Disculpe, sigo sin comprenderle. ¿Podría solicitármelo de una manera diferente?'],
            SillyStuffRepromptText: 'Disculpe, no le he entendido bien. ¿Le importaría repetir de nuevo?',

            GratitudeSpeakText: 'Muchas gracias por sus palabras. ¿Con qué otra cosa podría ayudarle?',
            GratitudeRepromptText: 'Muchas gracias por sus palabras. ¿Con qué otra cosa podría ayudarle?',

            HateSpeakText: 'No me parecen buenas palabras. ¿En qué más le puedo ayudar?',
            HateRepromptText: 'No me parecen buenas palabras. ¿En qué más le puedo ayudar?',

            ComingSoonSpeakText: 'Actualmente no le puedo ofrecer esa información, pero pronto lo haré, ¿Qué desea consultar?',
            ComingSoonRepromptText: 'Actualmente no le puedo ofrecer esa información, pero pronto lo haré, ¿Qué desea consultar?',

            NoFutureFuncionalitiesSpeakText: 'Disculpe, no dispongo de información sobre su consulta y núnca podré hacerlo. ¿Qué desea consultar?',
            NoFutureFuncionalitiesRepromptText: 'Disculpe, no dispongo de información sobre su consulta y núnca podré hacerlo. ¿Qué desea consultar?',

            GreetingsSpeakText: 'Hola de nuevo. ¿Qué le gustaría consultar?',
            GreetingsRepromptText: 'Hola de nuevo. ¿Qué le gustaría consultar?',

            ErrorSpeakText: 'Ha ocurrido un error intente de nuevo más tarfde.',
            ErrorRepromptText: 'Ha ocurrido un error intente de nuevo más tarfde.',

            RepromptHeaderSpeakText: ['¿Sigue por ahí? Por qué no prueba a preguntarme cosas como: '],
            RepropmtSpeakText: ['Ayuda', 'Funcionalidad uno', 'Funcionalidad dos'],
        }
    }
}

module.exports = TextConstants;