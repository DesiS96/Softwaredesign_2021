namespace Aufgabe1 {

    export class Plant {

        private _species: string;


        get species(): string {
            return this._species;

        }

        set species(value: string) {
            this._species = value;

        }
    }

    let plant: Plant = new Plant();
    console.log(plant.species);
    plant.species = "Rose";
    console.log(plant.species);





}