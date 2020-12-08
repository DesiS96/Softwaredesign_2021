import Movies from "./movies.json";

export function allMoviesByActor(_actor: String): String[] {

    let moviesWithActor: String[] = [];

    for (let i: number = 0; i < Movies.length; i++) {

        for (let j: number = 0; j < Movies[i].actors.length; j++) {

            if (Movies[i].actors[j] == _actor) {

                moviesWithActor.push(Movies[i].movie_name);
            }
        }
    }
    return moviesWithActor;

}