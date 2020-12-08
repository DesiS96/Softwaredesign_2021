System.register(["readline"], function (exports_1, context_1) {
    "use strict";
    var readline, ConsoleHandling;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (readline_1) {
                readline = readline_1;
            }
        ],
        execute: function () {
            ConsoleHandling = /** @class */ (() => {
                class ConsoleHandling {
                    constructor() {
                        // logger object with syslog levels as specified loglevels
                        // logs into build_service.log in directory log and onto console of running node.js process
                        this.consoleLine = readline.createInterface({
                            input: process.stdin,
                            output: process.stdout
                        });
                        if (ConsoleHandling.instance)
                            throw new Error("Use ConsoleHandling.Instance() instead new ConsoleHandling()");
                        ConsoleHandling.instance = this;
                    }
                    static getInstance() {
                        return ConsoleHandling.instance;
                    }
                    question(question, answers) {
                        this.consoleLine.question("Is this example useful? [y/n] ", (answer) => {
                            switch (answer.toLowerCase()) {
                                case "y":
                                    console.log("Super!");
                                    break;
                                case "n":
                                    console.log("Sorry! :(");
                                    break;
                                default:
                                    console.log("Invalid answer!");
                            }
                        });
                    }
                    printInput(input) {
                        this.consoleLine.write(input);
                    }
                    closeConsole() {
                        this.consoleLine.close();
                    }
                }
                ConsoleHandling.instance = new ConsoleHandling();
                return ConsoleHandling;
            })();
            exports_1("default", ConsoleHandling.getInstance());
        }
    };
});
//# sourceMappingURL=ConsoleHandling.js.map