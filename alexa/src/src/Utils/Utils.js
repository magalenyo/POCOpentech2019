"use strict";

class Utils {

    /**
     * Función getRandomIndexOfArray: Retorna una posición random desde un array.
     * @param  {Array} array
     * @returns  {Number} newRandomPosition
     */
    static getRandomIndexOfArray(array) {
        return Math.floor(Math.random() * Number(array.length));
    }

    /**
    * Función getRandomPhrase: Retorna un string random desde un array.
    * @param  {Array} array
    * @returns  {String} newText
    */
    static getRandomPhrase(array) {
        var i = 0;
        i = Math.floor(Math.random() * Number(array.length));
        return (array[i]);
    }

    /**
     * Función isUpperCharacter: Retorna True si el caracter es mayúscula, False si es minúscula y undefined si no cumple las condiciones anteriores.
     * @param  {String} character
     * @returns {Boolean} bolean
     */
    static isUpperCharacter(character) {
        if (/[A-Z]/.test(character)) {
            console.VIPLog("Is Upper Case: " + character);
            return true;
        } else if (/[a-z]/.test(character)) {
            console.VIPLog("Is Lower Case: " + character);
            return false;
        } else {
            console.VIPLog("Is A Number: " + character);
            return undefined;
        }
    }

    /**
    * Función parserIntToAlphabetic: Retorna un string aleatorio del tamaño de la variable length
    * @param  {Number} length
    * @returns {String} string
    */
    static generateRandomString(length) {
        let randomString = '';
        const stringValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++)
            randomString += stringValues.charAt(Math.floor(Math.random() * stringValues.length));

        return randomString;
    }
}

module.exports = Utils;