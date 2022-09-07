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
  async addRoles() {
    return await this.db.execute(
      'SELECT * FROM role'
    )
  }
  async findAllRoles() {
    return await this.db.execute(
      'SELECT * FROM role'
    )
  }
  async findAllRoles() {
    return await this.db.execute(
      'SELECT * FROM role'
    )
  }
}

export default new StaffDatabase(connection)