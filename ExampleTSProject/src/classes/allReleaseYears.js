System.register(["./movies.json"], function (exports_1, context_1) {
    "use strict";
    var movies_json_1;
    var __moduleName = context_1 && context_1.id;
    //let movieString: string = Movies.toString();
    //console.log(Movies[0]);
    function selectFilmByReleaseYear(_releaseYear) {
        //let moviesByYear: String = Movies.filter((movie) => movie.release_year == _releaseYear).toString();
        let moviesInYear = [];
        //return Movies.filter((movie) => movie.release_year == _releaseYear);
        for (let i = 0; i < movies_json_1.default.length; i++) {
            if (movies_json_1.default[i].release_year == _releaseYear) {
                moviesInYear.push(movies_json_1.default[i].movie_name);
            }
        }
        return moviesInYear;
    }
    exports_1("selectFilmByReleaseYear", selectFilmByReleaseYear);
    return {
        setters: [
            function (movies_json_1_1) {
                movies_json_1 = movies_json_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=allReleaseYears.js.map