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
    this.chambers = [];
    system.log("New hospital created", 1);
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
 * @return Object chamber
 *   The chamber
 */
hospital.prototype.addChamber = function addChamber(id, type, patientChamber, quarantine) {
	if (typeof patientChamber == "undefined") patientChamber = true;
	if (typeof quarantine == "undefined") quarantine = false;
    var newChamber = new chamberObj(id, type, patientChamber, quarantine);
    this.chambers.push(newChamber);
    return newChamber;
}

/**
 * Gets all chambers
 *
 * @return Array chambers
 *   All chambers in array, witch are objects
 */
hospital.prototype.getChambers = function getChambers() {
    return this.chambers;
}

/**
 * Add a new patient
 *
 * @param String name
 *   The patient's name, like 'John Doe'
 *
 * @param String gender
 *   The patient's gender, either 'Man' or 'Woman'
 *
 * @param String disease
 *   The patient's disease, like 'Cholera'
 */
hospital.prototype.addPatient = function addPatient(name, gender, disease) {
    this.chambers.some(function (chamber, index) {
        console.log(chamber);
        return false;
    });
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