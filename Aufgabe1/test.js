"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    class Plant {
        get species() {
            return this._species;
        }
        set species(value) {
            this._species = value;
        }
    }
    Aufgabe1.Plant = Plant;
    let plant = new Plant();
    console.log(plant.species);
    plant.species = "Rose";
    console.log(plant.species);
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=test.js.map