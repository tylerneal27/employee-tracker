import inquirer from 'inquirer';
import { viewAllDepartments, viewAllRoles , viewAllEmployee , addDepartment , addRole , addEmployee , updateEmployeeRole } from './src/staffActions.js';

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
        const departments = await viewAllDepartments();
        console.table(departments);
        break;
      case 'view all roles':
        var roles = await viewAllRoles();
        console.table(roles);
        break;
      case 'view all employees':
        var employees = await viewAllEmployee();
        console.table(employees);
        break;
      case 'add a department':
        const newDepartment = await departmentPrompt();
        await addDepartment(newDepartment);
        break;
      case 'add a role':
        const depts = await viewAllDepartments();
        const newRole = await rolePrompt(depts);
        await addRole(newRole);
        break;
      case 'add an employee':
        var roles = await viewAllRoles();
        const manager = await viewAllEmployee();
        const newEmployee = await employeePrompt(roles, manager);
        await addEmployee(newEmployee);
        break;
      case 'update an employee role':
        var employees = await viewAllEmployee();
        var roles = await viewAllRoles();
        const {employeeId, roleId} = await promptUpdate(employees, roles)
        await updateEmployeeRole(employeeId, roleId);
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

  const departmentChoices = departments.map(({id,name}) => ({
    name: name,value: id
  }))

  try {
    return await inquirer.prompt([
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
        name: 'departmentId',
        message: 'choose which department.',
        choices: departmentChoices
      }
    ]);
  } catch (error) {
    console.log(error);
  }
}

async function employeePrompt(roles, employees) {

  const roleChoices = roles.map(({id,title}) => ({
    name: title, value: id
  }))
  const managerChoices = employees.map(({id,first_name,last_name}) => ({
    name: `${first_name} ${last_name}`, value: id
  }))

  try {
    return await inquirer.prompt([
      {
        type: 'input',
        name: 'firstName',
        message: 'Enter a new employee first name please.'
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter a new employee last name please.'
      },
      {
        type: 'list',
        name: 'roleId',
        message: 'choose which role to add to.',
        choices: roleChoices 
      },
      {
        type: 'list',
        name: 'managerId',
        message: 'choose who this employee\'s manager is.',
        choices: [{name: 'none',value: null}, ...managerChoices]
      }
    ]);
  } catch (error) {
    console.log(error);
  }
}

async function promptUpdate(employees, roles) {

  const employeeChoices = employees.map(({id,first_name,last_name}) => ({
    name: `${first_name} ${last_name}`, value: id
  }))
  const roleChoices = roles.map(({id,title}) => ({
    name: title, value: id
  }))
  

  try {
    return await inquirer.prompt([
      {
        type: 'list',
        name: 'employeeId',
        message: 'choose which employee to change there role.',
        choices: employeeChoices
      },
      {
        type: 'list',
        name: 'roleId',
        message: 'choose what role to give this employee.',
        choices: roleChoices
      }
    ]);
  } catch (error) {
    console.log(error);
  }
}

staff()