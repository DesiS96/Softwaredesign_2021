System.register(["./movies.json"], function (exports_1, context_1) {
    "use strict";
    var movies_json_1;
    var __moduleName = context_1 && context_1.id;
    function allMoviesByActor(_actor) {
        let moviesWithActor = [];
        for (let i = 0; i < movies_json_1.default.length; i++) {
            for (let j = 0; j < movies_json_1.default[i].actors.length; j++) {
                if (movies_json_1.default[i].actors[j] == _actor) {
                    moviesWithActor.push(movies_json_1.default[i].movie_name);
                }
            }
        }
        return moviesWithActor;
    }
    exports_1("allMoviesByActor", allMoviesByActor);
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
//# sourceMappingURL=allMoviesByActor.js.map