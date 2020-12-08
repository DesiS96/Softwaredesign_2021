import ConsoleHandling from "./classes/ConsoleHandling";

// ConsoleHandling.question("ABC");
ConsoleHandling.printInput("Hello SoftwareDesign Monsters!");

const fs: any = require("fs");
const rawdata: any = fs.readFileSync("./movies.json");
const jsondata: any = JSON.parse(rawdata);



//const fs = require("fs");

/*fs.open("C:\Users\Desiree\Desktop\Uni\Softwaredesign_2021\ExampleTSProject\src\classes\actors.json", "r", (err: any, fd: any) => {
  if (err) throw err;
  fs.close(fd, (err: any) => {
    if (err) throw err;
  });
});*/

