namespace Aufgabe1 {

    console.log("Das Wasser aufdrehen.");

    let temperature: number = 0;
    let perfectTemperature: number = 36;

    if (temperature != perfectTemperature) {

        console.log("Das Wasser ist zu kalt");
        temperature = perfectTemperature;

    }
    else {

        console.log("Das Wasser hat genau die richtige Temperatur.");

    }

    console.log("Die Dusche betreten.");

    let dirt: number = 50;

    while (dirt > 0) {

        console.log("Noch nicht sauber.");
        dirt = dirt - 10;

    }

    console.log("Die dusche verlassen.");

    console.log("Abtrocknen.");

}