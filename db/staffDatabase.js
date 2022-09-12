import connection from '../config/connection.js'

class StaffDatabase {
  constructor(db){
    this.db = db
  }
  async findAllDepartments() {
    return await this.db.execute(
      'SELECT * FROM department'
    )
  }
  async findAllRoles() {
    return await this.db.execute(
      'SELECT * FROM role'
    )
  }
  async findAllEmployee() {
    return await this.db.execute(
      'SELECT * FROM employee'
    )
  }
  async addDepartment(department) {
    return await this.db.execute(
      'INSERT INTO department (name) VALUES (?)',
      [department]
    )
  }
  async addRole(role) {
    return await this.db.execute(
      'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',
      [role.title, role.salary, role.departmentId]
    )
  }
  async addEmployee(employee) {
    return await this.db.execute(
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
      [employee.firstName, employee.lastName, employee.roleId, employee.managerId]
    )
  }
  async updateEmployeeRole(employeeId, roleId) {
    return await this.db.execute(
      'UPDATE employee SET role_id = ? WHERE id = ?',
      [roleId, employeeId]
    )
  }
}

export default new StaffDatabase(connection)