/****************************************************/
// Filename: ./objects/hospital.js
// Created: AtlasDev
// Description: The hospital object is defined here
/****************************************************/

var system = require('../libs/system.js');
var chamberObj = require('./chamber.js');

/**
 * Create a new hospital
 *
 */
function hospital() {
    this.chambers = "{}";
}

/**
 * Creates a new room
 *
 * @param String id
 *   The chamber ID, like "J1b-110-1".
 *
 * @param Boolean patientChamber
 *   If the new chamber is a patient chamber
 *
 * @param Boolean quarantine
 *   If the new chamber is a quarantine, only if patientChamber is true too
 *
 * @return String id
 *   The chamber id
 */
hospital.prototype.addChamber = function addChamber(id, patientChamber, quarantine) {
    patientChamber = typeof patientChamber !== 'undefined' ? patientChamber : true; 
    quarantine = typeof quarantine !== 'undefined' ? quarantine : false;
    
    var newChamber = new chamberObj(id, patientChamber, quarantine);
    
    return newChamber.getId;
}

/**
 * Cleans all rooms
 *
 * @return String message
 *   The cleaning message
 */
hospital.prototype.clean = function clean() {
    var message = "All chambers have been cleaned";
    system.log(message);
    return message;
}
module.exports = hospital;