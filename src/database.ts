export default class Database {
  private internalName: string

  constructor(name: string) {
    this.internalName = name
  }

  get name(): string {
    return this.internalName
  }
}
