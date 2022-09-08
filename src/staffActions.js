import staffDatabase from '../db/staffDatabase.js'

export const viewAllDepartments = async () => {
  const departments = await staffDatabase.findAllDepartments();
  console.table(departments[0]);
} 

export const viewAllRoles = async () => {
  const roles = await staffDatabase.findAllRoles();
  console.table(roles[0]);
}

export const viewAllEmployee = async () => {
  const employees = await staffDatabase.findAllEmployee();
  console.table(employees[0]);
}

export const addDepartment = async (department) => {
  await staffDatabase.addDepartment(department);
}

export const addRole = async (role) => {
  await staffDatabase.addRole(role);
}

export const addEmployee = async (employee) => {
  await staffDatabase.addEmployee(employee);
}

// export const updateEmployeeRole = async (employeeRole) => {
  
//}