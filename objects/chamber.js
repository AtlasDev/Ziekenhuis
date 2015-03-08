/****************************************************/
// Filename: ./objects/chamber.js
// Created: AtlasDev
// Description: The chamber object is defined here
/****************************************************/

var system = require('../libs/system.js');

/**
 * Create a new chamber
 *
 * @param String id
 *   The chamber ID, like "J1b-110-1".
 *
 * @param Boolean patientChamber
 *   If the new chamber is a patient chamber
 *
 * @param Boolean quarantine
 *   If the new chamber is a quarantine, only if patientChamber is true too
 */
function chamber(id, patientChamber, quarantine, quarantineDisease) {
    patientChamber = typeof patientChamber !== 'undefined' ? patientChamber : true; 
    quarantine = typeof quarantine !== 'undefined' ? quarantine : false;
    quarantineDisease = typeof quarantineDisease !== 'undefined' ? quarantineDisease : null;

    this.id = id;
    this.patientChamber = patientChamber;
    this.quarantine = quarantine;
    this.quarantineDisease = quarantineDisease;
}

/**
 * Get the id
 *
 * @return String id
 *   The id
 */
chamber.prototype.getID = function getID() {
    return this.id;
}

/**
 * If the chamber is a patient chamber
 *
 * @return Boolean patientChamber
 *   If the chamber is a patient chamber
 */
chamber.prototype.isPatientChamber = function isPatientChamber() {
    return this.PatientChamber;
}

/**
 * If the chamber is a quarantine chamber
 *
 * @return Boolean patientChamber
 *   If the chamber is a quarantine chamber
 */
chamber.prototype.isQuarantine = function isQuarantine() {
    return this.quarantine;
}

/**
 * Gets the chamber disease
 *
 * @return String disease
 *   Get the chamber disease, if not a quarantine, returns null
 */
chamber.prototype.getDisease = function getDisease() {
    return this.quarantineDisease;
}

/**
 * Cleans the room
 *
 * @return String message
 *   The cleaning message
 */
chamber.prototype.clean = function clean() {
    var message = "Chamber " + this.id + "is cleaned.";
    system.log(message);
    return message;
}
module.exports = chamber;