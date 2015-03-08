ziekenhuis = require('../app.js');

var testZiekenhuis = new ziekenhuis();
var testKamer = testZiekenhuis.addChamber('Test');
testKamer.addPatient("Dany Sluijk", "Cholera", "Man");
console.log(testZiekenhuis.getChambers()[0].findOpenBed());