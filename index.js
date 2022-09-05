const inquirer = require("inquirer");
const { default: ListPrompt } = require("inquirer/lib/prompts/list");
const db = require("./db")

function staff() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: "Pick one of the following",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
        ],
        name: "choices",
      },
    ])
    .then((pickedChoice) => {

      switch(pickedChoice.choices) {
        case "view all departments":
          viewAllDepartments();
          break;
        case "view all roles":
          viewAllRoles();
          break;
        case "view all employees":
          viewAllEmployee();
          break;
        case "add a department":
          addDepartment();
          break;
        case "add a role":
          addRole();
          break;
        case "add an employee":
          addEmployee();
          break;
        case "update an employee role":
          updateEmployeeRole();
          break;
        default:
          console.log('pick a different option')
          staff()
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(error);
      } else {
        console.log("something went wrong");
      }
    });
}

const viewAllDepartments = () => {
  console.log("made it here");
  db.findAllDepartments()
  .then((departments) => {
    console.table(departments)
  })
}

const viewAllRoles = () => {
  
}



staff()