System.register(["./classes/ConsoleHandling"], function (exports_1, context_1) {
    "use strict";
    var ConsoleHandling_1, fs, rawdata, jsondata;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ConsoleHandling_1_1) {
                ConsoleHandling_1 = ConsoleHandling_1_1;
            }
        ],
        execute: function () {
            // ConsoleHandling.question("ABC");
            ConsoleHandling_1.default.printInput("Hello SoftwareDesign Monsters!");
            fs = require("fs");
            rawdata = fs.readFileSync("./movies.json");
            jsondata = JSON.parse(rawdata);
        }
    };
});
//# sourceMappingURL=main.js.map