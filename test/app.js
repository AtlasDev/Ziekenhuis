ziekenhuis = require('../app.js');

var testZiekenhuis = new ziekenhuis();
var testKamer = testZiekenhuis.addChamber('Test');
testKamer.addPatient("John Doe", "Flu", "Man");
console.log(testZiekenhuis.getChambers()[0].findOpenBed());