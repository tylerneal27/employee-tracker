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
        const newDepartment = await departmentPrompt();
        await addDepartment(newDepartment);
        break;
      case 'add a role':
        // TODO: add inquirer prompt here
        await addRole();
        break;
      case 'add an employee':
        // TODO: add inquirer prompt here
        await addEmployee();
        break;
      case 'update an employee role':
        await updateEmployeeRole();
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

async function departmentPrompt() {
  try {
    const { newDepartment } = await inquirer.prompt([
      {
        type: 'input',
        name: 'newDepartment',
        message: 'Enter a new department please.'
      }
    ]);
    return newDepartment;
  } catch (error) {
    console.log(error);
  }
}

staff()