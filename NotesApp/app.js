// const fs = require("fs");
// fs.appendFileSync("note.txt", "\nTugce Polat");

// const add = require("./utils");
// const firstName = require("./utils");

// console.log(firstName);

// console.log(add(1, 2));

const notes = require("./notes");
// console.log(getNotes());

// const validator = require("validator");
//const chalk = require("chalk");

const yargs = require("yargs");

// //console.log(validator.isEmail("can@mail.com")); // true
// console.log(chalk.blue.inverse.bold("Success!"));

// console.log(process.argv[2]);

//const command = process.argv[2]; // How to get input from the user via command line arguments

//Customize yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.removeNote(argv.title),
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.readNote(argv.title),
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: () => notes.listNotes(),
});

yargs.parse();

// add, remove, read, list

//console.log(process.argv);
//console.log(yargs.argv);

// if (command === "add") {
//   console.log("Adding note!");
// } else if (command === "remove") {
//   console.log("Removing note!");
// }
