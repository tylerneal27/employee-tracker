import inquirer from 'inquirer';
import { viewAllDepartments, viewAllRoles , viewAllEmployee , addDepartment , addRole , addEmployee } from './src/staffActions.js';

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
        //const newRole = await rolePrompt();
        // await addRole(newRole);
        const depts = await viewAllDepartments();
        const newRole = await rolePrompt(depts);
        await addRole(newRole);
        break;
      case 'add an employee':
        // TODO: add inquirer prompt here
        const newEmployee = await employeePrompt();
        await addEmployee(newEmployee);
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
async function rolePrompt(departments) {

  //console.table()
  let departmentChoices = departments.map(({id,name}) => ({
    name: name,value: id
  }))
  try {
    const  newRole  = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter a new role please.'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'enter this roles salary please.'
      },
      {
        type: 'list',
        name: 'department_id',
        message: 'choose which department.',
        choices: departmentChoices
      }
    ]);
    console.log('Role', newRole);
    return newRole;
  } catch (error) {
    console.log(error);
  }

}
async function employeePrompt() {
  try {
    const { newEmployee } = await inquirer.prompt([
      {
        type: 'input',
        name: 'newEmployee',
        message: 'Enter a new employee name please.'
      }
    ]);
    return newEmployee;
  } catch (error) {
    console.log(error);
  }
}

staff()