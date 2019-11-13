/**
 * Clase Apl: Objeto que se encarga de manejar los datos de las pantallas APL.
 */
module.exports = class Apl {
    constructor() {
        this.aplIntentView = '';
        this.aplIntentTouchToken = '';
        this.template = '';
        this.datasource = '';
        this.headerBackButton = false;
        this.headerNavigationAction = '';
    }
    clear() {
        this.aplIntentView = '';
        this.aplIntentTouchToken = '';
        this.template = '';
        this.datasource = '';
        this.headerBackButton = false;
        this.headerNavigationAction = '';
    }
    init(values) {
        this.aplIntentView = values.aplIntentView;
        this.aplIntentTouchToken = values.aplIntentTouchToken;;
        this.template = values.template;
        this.datasource = values.template;
        this.headerBackButton = values.headerBackButton;
        this.headerNavigationAction = values.headerNavigationAction;
        return this;
    }
    toJSON() {
        return Object.getOwnPropertyNames(this).reduce((a, b) => {
            a[b] = this[b];
            return a;
        }, {});
    }
}