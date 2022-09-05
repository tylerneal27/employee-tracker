const db = require('./connection.js')
class DB {
  constructor(db){
    this.db =db
  }
  findAllDepartments() {
    return this.db.promise().query(
      'SELECT * FROM department'
    )
  }
}
module.exports = new DB(db)