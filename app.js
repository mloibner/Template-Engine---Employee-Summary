
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const myTeam = [];


function generateAManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name, Manager?",
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID:",
        validate: (v) => !isNaN(v) || "You must enter a number.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your E-mail:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter your office number:",
        validate: (v) => !isNaN(v) || "You must enter a number.",
      },
    ])
    .then((result) => {
      myTeam.push(
        new Manager(result.name, result.id, result.email, result.officeNumber)
      );
      addTeamMember();
    });
}

function generateAEnginner() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter Employee ID:",
        validate: (v) => !isNaN(v) || "You must enter a number.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter E-mail:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter github username:",
      },
    ])
    .then((result) => {
      myTeam.push(
        new Engineer(result.name, result.id, result.email, result.github)
      );
      addTeamMember();
    });
}

function generateAIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter ID:",
        validate: (v) => !isNaN(v) || "You must enter a number.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter E-mail:",
      },
      {
        type: "input",
        name: "school",
        message: "Where were they schooled:",
      },
    ])
    .then((result) => {
      myTeam.push(
        new Intern(result.name, result.id, result.email, result.school)
      );
      addTeamMember();
    });
}
function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "type",
        message:
          "What type of employee do you want to enter? Engineer, Intern or type 'Done' to quit:",
      },
    ])
    .then((result) => {
      if (result.type === "Done") {
        // convert employees to html and store it
        let teamHtml = render(myTeam);
        fs.writeFileSync("./output/team.html", teamHtml);
      }
      if (result.type === "Engineer") {
        generateAEnginner();
      }
      if (result.type === "Intern") {
        generateAIntern();
      }
    });
}

function main() {
  generateAManager();
}

main();