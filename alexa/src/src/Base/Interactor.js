//Importamos todas las clases que necesita el Interactor (Arquitectura VIP).
const DataBaseInteractor = require('../Interactors/DataBase/DataBaseInteractor');
const ServiceInteractor = require('../Interactors/Services/ServiceInteractor');

//Exportamos todas las clases que necesita el Interactor (Arquitectura VIP).
module.exports.DataBaseInteractor = DataBaseInteractor;
module.exports.ServiceInteractor = ServiceInteractor;