//import { stringify } from "querystring";
import Movies from "./movies.json";

//let movieString: string = Movies.toString();
//console.log(Movies[0]);

export function selectFilmByReleaseYear(_releaseYear: number): String[] {

    //let moviesByYear: String = Movies.filter((movie) => movie.release_year == _releaseYear).toString();

    let moviesInYear: String[] = [];

    //return Movies.filter((movie) => movie.release_year == _releaseYear);

    for (let i: number = 0; i < Movies.length; i++) {

        if (Movies[i].release_year == _releaseYear) {

            moviesInYear.push(Movies[i].movie_name);
        }     
    }
    return moviesInYear;
}