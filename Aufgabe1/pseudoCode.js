"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    console.log("Das Wasser aufdrehen.");
    let temperature = 0;
    let perfectTemperature = 36;
    if (temperature != perfectTemperature) {
        console.log("Das Wasser ist zu Kalt");
        temperature = perfectTemperature;
    }
    else {
        console.log("Das Wasser hat genau die richtige Temperatur.");
    }
    console.log("Die Dusche betreten.");
    let dirt = 50;
    while (dirt > 0) {
        console.log("Noch nicht sauber.");
        dirt = dirt - 10;
    }
    console.log("Die dusche verlassen.");
    console.log("Abtrocknen.");
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=pseudoCode.js.map