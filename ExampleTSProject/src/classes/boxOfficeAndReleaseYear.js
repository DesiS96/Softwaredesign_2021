System.register(["./movies.json"], function (exports_1, context_1) {
    "use strict";
    var movies_json_1;
    var __moduleName = context_1 && context_1.id;
    function showBoxOfficeAndReleaseYear(_movieName) {
        for (let i = 0; i < movies_json_1.default.length; i++) {
            if (movies_json_1.default[i].movie_name == _movieName) {
                console.log("Filmtitel: " + movies_json_1.default[i].movie_name);
                console.log("Box-Office: " + movies_json_1.default[i].box_office);
                console.log("Erscheinungsjahr: " + movies_json_1.default[i].release_year); //später noch an Konsolenausgabe anpassen
            }
        }
    }
    exports_1("showBoxOfficeAndReleaseYear", showBoxOfficeAndReleaseYear);
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
//# sourceMappingURL=boxOfficeAndReleaseYear.js.map