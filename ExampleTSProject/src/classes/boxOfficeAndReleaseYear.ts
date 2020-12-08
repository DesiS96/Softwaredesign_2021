import Movies from "./movies.json";

export function showBoxOfficeAndReleaseYear(_movieName: String): void {

    for (let i: number = 0; i < Movies.length; i++) {

        if (Movies[i].movie_name == _movieName) {

            console.log("Filmtitel: " + Movies[i].movie_name);
            console.log("Box-Office: " + Movies[i].box_office);
            console.log("Erscheinungsjahr: " + Movies[i].release_year); //später noch an Konsolenausgabe anpassen
            
        }
    }
}