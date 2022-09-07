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
  async addRoles(role) {
    return await this.db.execute(
      'INSERT INTO role (name) VALUES (?)',
      [role]
    )
  }
  async addEmployee(employee) {
    return await this.db.execute(
      'INSERT INTO employee (name) VALUES (?)',
      [employee]
    )
  }
  async updateEmployeeRole() {
    return await this.db.execute(
      'SELECT * FROM role'
    )
  }
}

export default new StaffDatabase(connection)