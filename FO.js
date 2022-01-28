// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

//js mein input Array ke from mein jaata hai and that is array is process.argv Array


const help = require("./commands/help")
const organize = require("./commands/organize")
const tree = require("./commands/tree")

let inputArr = process.argv.slice(2);
let command = inputArr[0];

switch (command) {
  case "tree":
    tree.treekey(inputArr[1])
    break;
  case "organize":
    organize.organizekey(inputArr[1])
    break;
  case "help":
    help.helpkey()
    break;

  default:
    console.log("PLEASE ENTER A VALID Command");
    break;
}





