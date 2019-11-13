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
        
            LaunchRequestSpeakText: 'Hello, <lang xml:lang="es-ES">Juan</lang>. I\'ve Seen your doctor has set leg and arm exercises routines for you. Which one do you want to start with? Say leg routine or arm routine.',
            LaunchRequestRepromptText: 'Hello, <lang xml:lang="es-ES">Juan</lang>. I\'ve Seen your doctor has set leg and arm exercises routines for you. Which one do you want to start with? Say leg routine or arm routine.',

            SessionEndedSpeakText: 'Thanks, have a good day.',
            SessionEndedRepromptText: 'Thanks, have a good day.',

            RestartSpeakText: 'De acuerdo., volvamos a empezar ¿Qué desea hacer?',
            RestartRepromptText: 'De acuerdo., volvamos a empezar ¿Qué desea hacer?',

            HelpSpeakText: 'Puedo ayudarle con muchas cosas, ¿Qué desea hacer?',
            HelpRepromptText: 'Puedo ayudarle con muchas cosas, ¿Qué desea hacer?',

            SillyStuffSpeakText: ['Sorry, can you repeat please?'],
            SillyStuffRepromptText: 'Sorry, can you repeat please?',

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

            LegRoutineSpeakText: 'Let\'s start with the leg routine. If you want to stop at any moment, please say: routine break.',
            LegRoutineRepromptText: 'Let\'s start with the leg routine. If you want to stop at any moment, please say: routine break. If you want to finish, please say: stop.',

            LegRoutineExercise1Text: 'Sitting on a chair, extend your left leg until it is parallel to the floor. Avoid tensing your knee. Then, slowly lower your foot to the floor. Repeat with the right leg. <audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_countdown_loop_32s_full_01"/>',
            LegRoutineExercise1RepromptText: 'Sitting on a chair, extend your left leg until it is parallel to the floor. Avoid tensing your knee. Then, slowly lower your foot to the floor. <audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_countdown_loop_32s_full_01"/>',

            LegRoutineExercise2Text: 'Sitting in a chair, lift the affected leg toward your chest, doing everything possible to maintain a controlled movement. Then place your foot back on the floor. Repeat with the other leg. <audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_countdown_loop_32s_full_01"/>',
            LegRoutineExercise2RepromptText: 'Sitting in a chair, lift the affected leg toward your chest, doing everything possible to maintain a controlled movement. Then place your foot back on the floor. Repeat with the other leg. <audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_countdown_loop_32s_full_01"/>',

            LegRoutineEndText: '<say-as interpret-as="interjection">Well done.</say-as> You have successfully finished the routine. Which routine do you want to start, leg routine or arm routine?',
            LegRoutineEndRepromptText: '<say-as interpret-as="interjection">Well done.</say-as> You have successfully finished the routine. Which routine do you want to start, leg routine or arm routine?',

            LegRoutineDefaultText: 'Default case.',
            LegRoutineDefaultRepromptText: 'Default case.',

            ArmRoutineSpeakText: 'Let\'s start with the arm routine. If you want to stop at any moment, please say: routine break.',
            ArmRoutineRepromptText: 'Let\'s start with the arm routine. If you want to stop at any moment, please say: routine break. If you want to finish, please say: stop.',

            ArmRoutineExercise1Text: 'Wrap your hands around a bottle of water. Then, make large circular movements. You can use your unaffected arm to guide your affected arm. Make 10 circles slowly and in a controlled manner. <audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_countdown_loop_32s_full_01"/>',
            ArmRoutineExercise1RepromptText: 'Wrap your hands around a bottle of water. Then, make large circular movements. You can use your unaffected arm to guide your affected arm. Make 10 circles slowly and in a controlled manner. <audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_countdown_loop_32s_full_01"/>',

            ArmRoutineExercise2Text: 'Hold a bottle of water with the affected hand and keep your elbows attached to your sides. Then, with your arms folded at 90 degrees, open your arms so that your forearms come out to the sides. Return your arms to the center and repeat slowly 10 times. <audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_countdown_loop_32s_full_01"/>',
            ArmRoutineExercise2RepromptText: 'Hold a bottle of water with the affected hand and keep your elbows attached to your sides. Then, with your arms folded at 90 degrees, open your arms so that your forearms come out to the sides. Return your arms to the center and repeat slowly 10 times. <audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_countdown_loop_32s_full_01"/>',

            ArmRoutineEndText: 'Well done! You have successfully finished the routine. Which routine do you want to start, leg routine or arm routine?',
            ArmRoutineEndRepromptText: 'Well done! You have successfully finished the routine. Which routine do you want to start, leg routine or arm routine?',

            ArmRoutineDefaultText: 'Default case.',
            ArmRoutineDefaultRepromptText: 'Default case.',

            BreakRoutineText: 'We stopped the routine. Which routine do you want to start, leg routine or arm routine?',
            BreakRoutineRepromptText: 'We stopped the routine. Which routine do you want to start, leg routine or arm routine?',

            ErrorSpeakText: 'An error has occured, try later.',
            ErrorRepromptText: 'An error has occured, try later.',

            NextExerciseDefaultText: 'Default message for the next exercise case.',
            NextExerciseDefaultRepromptText: 'Default message for the next exercise case.',

            NeedSupportText: 'You required some help. Which routine do you want to start, leg routine or arm routine?',
            NeedSupportRepromptText: 'You required some help. Which routine do you want to start, leg routine or arm routine?',

            RepromptHeaderSpeakText: ['¿Sigue por ahí? Por qué no prueba a preguntarme cosas como: '],
            RepropmtSpeakText: ['Ayuda', 'Funcionalidad uno', 'Funcionalidad dos'],
        }
    }
}

module.exports = TextConstants;