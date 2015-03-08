/****************************************************/
// Filename: ./objects/patient.js
// Created: AtlasDev
// Description: The patient object is defined here
/****************************************************/

var system = require('../libs/system.js');

/**
 * Create a new patient
 *
 * @param String name
 *   The patient's name, like 'John Doe'
 
 * @param String gender
 *   The patient's gender, either 'Man' or 'Woman'
 *
 * @param String disease
 *   The patient's disease, like 'Cholera'
 */
function patient(name, gender, disease) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gender = gender.toLowerCase().charAt(0).toUpperCase() + gender.slice(1);
    this.disease = disease.toLowerCase().charAt(0).toUpperCase() + disease.slice(1);
    system.log("New patient created", 1);
}

/**
 * Get the patient's name
 *
 * @return String name
 *   The name
 */
patient.prototype.getName = function getName() {
    return this.name;
}

/**
 * Get the patient's gender
 *
 * @return String gender
 *   The gender
 */
patient.prototype.getGender = function getGender() {
    return this.gender;
}

/**
 * Get the patient's disease
 *
 * @return String disease
 *   The disease
 */
patient.prototype.getDisease = function getDisease() {
    return this.disease;
}
module.exports = patient;