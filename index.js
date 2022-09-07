import inquirer from 'inquirer';
import { viewAllDepartments, viewAllRoles , addDepartment } from './src/staffActions.js';

async function staff() {
  try {
    const pickedChoice = await inquirer.prompt([
      {
        type: 'list',
        message: 'Pick one of the following',
        choices: [
          'view all departments',
          'view all roles',
          'view all employees',
          'add a department',
          'add a role',
          'add an employee',
          'update an employee role',
        ],
        name: 'choices',
      },
    ]);
    switch(pickedChoice.choices) {
      case 'view all departments':
        await viewAllDepartments();
        break;
      case 'view all roles':
        await viewAllRoles();
        break;
      case 'view all employees':
        await viewAllEmployee();
        break;
      case 'add a department':
        // TODO: add inquirer prompt here
        await addDepartment();
        break;
      case 'add a role':
        // TODO: add inquirer prompt here
        addRole();
        break;
      case 'add an employee':
        // TODO: add inquirer prompt here
        addEmployee();
        break;
      case 'update an employee role':
        updateEmployeeRole();
        break;
      default:
        console.log('pick a different option')
    }
    staff()
  } catch (error) {
    if (error.isTtyError) {
      console.log('TTY Error: ' + error);
    } else {
      console.log(error);
    }
  }
}



staff()