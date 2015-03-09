ziekenhuis = require('../app.js');

var testZiekenhuis = new ziekenhuis();
var testKamer = testZiekenhuis.addChamber('Test', 'Patientenkamer');
testZiekenhuis.addPatient("John Doe", "Flu", "Man");
testZiekenhuis.addPatient("John adfd", "Flu", "Man");
console.log(testZiekenhuis.getChambers()[0]);