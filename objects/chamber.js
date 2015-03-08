/****************************************************/
// Filename: ./objects/chamber.js
// Created: AtlasDev
// Description: The chamber object is defined here
/****************************************************/

var system = require('../libs/system.js');
var patientObj = require('./patient.js');

/**
 * Create a new chamber
 *
 * @param String id
 *   The chamber ID, like "J1b-110-1".
 
 * @param String type
 *   The type room, like 'Operatiekamer' or 'kantoor'
 *
 * @param Boolean patientChamber
 *   If the new chamber is a patient chamber
 *
 * @param Boolean quarantine
 *   If the new chamber is a quarantine, only if patientChamber is true too
 
 * @param String quarantineDisease
 *   The kind of disease in the quarantine is
 */
function chamber(id, type, patientChamber, quarantine, quarantineDisease) {
    this.id = id;
    this.patientChamber = typeof patientChamber !== 'undefined' ? patientChamber : true;
    this.quarantine = typeof quarantine !== 'undefined' ? quarantine : false;
    this.quarantineDisease = typeof quarantineDisease !== 'undefined' ? quarantineDisease : null;
    this.type = type;
    this.maxPatients = Math.floor((Math.random() * 6) + 1);
    this.beds = [];
    
    for(var i = 0; i < this.maxPatients; i++) {
        var emptyBed = {
            patient: null,
            occupied: false
        };
        emptyBed.bed = i+1;
        this.beds.push(emptyBed);
    }
    system.log("New chamber created", 1);
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
chamber.prototype.addPatient = function addPatient(name, disease, gender) {
    if(this.isQuarantine) {
        if(this.getDisease != disease) {
            return false;
        }
    }
    var newPatient = new patientObj(name, gender, disease);
    this.beds.push(newPatient);
}

/**
 * Find a open bed
 *
 * @return int bed
 *   The bed it's id, if full; return false
 */
chamber.prototype.findOpenBed = function findOpenBed() {
    console.log(this.beds);
    this.beds.forEach(function(bed) {
        if(bed.occupied == false) {
            return true;
        }
    });
    return false;
}

chamber.prototype.getBed = function getBed(bedNumber) {
    
}

/**
 * Removes a patient
 *
 * @param int bedNumber
 *   The number of the bed where the patient is in
 */
chamber.prototype.removePatient = function removePatient(bedNumber) {
    this.patients.filter(function (patient){
        patient.getName == "sushi";
    });
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
    var message = "Chamber " + this.id + " is cleaned.";
    system.log(message);
    return message;
}
module.exports = chamber;