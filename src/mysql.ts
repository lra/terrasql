import * as mysql from "mysql"

export default class MySQL {
  public connection: mysql.Connection

  private host: string
  private port: number
  private user: string
  private password: string
  private database: string

  constructor(user: string, password: string, database: string, host: string = "localhost", port: number = 3306)  {
    this.host = host
    this.port = port
    this.user = user
    this.password = password
    this.database = database

    this.connection = mysql.createConnection({
        database: this.database,
        host: this.host,
        insecureAuth: true,
        password: this.password,
        port: this.port,
        user: this.user,
    })
  }
}
