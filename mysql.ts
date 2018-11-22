import * as mysql from "mysql"

export default class MySQL {
  host: string
  port: number
  user: string
  password: string
  database: string
  connection: mysql.Connection

  constructor(user:string, password:string, database:string, host:string = 'localhost', port:number = 3306)  {
    this.host = host
    this.port = port
    this.user = user
    this.password = password
    this.database = database

    this.connection = mysql.createConnection({
        insecureAuth: true,
        host: this.host,
        port: this.port,
        user: this.user,
        password: this.password,
        database: this.database
    })
  }
}
