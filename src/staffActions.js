import staffDatabase from '../db/staffDatabase.js'

export const viewAllDepartments = async () => {
  const departments = await staffDatabase.findAllDepartments();
  console.table(departments[0]);
} 

export const viewAllRoles = async () => {
  
}

export const addDepartment = async (department) => {
  await staffDatabase.addDepartment(department);
}