class Database {
  private static isConnected: boolean = false;
  static getConnection() {
    if (!this.isConnected) {
      console.log("connecting ...");
      this.isConnected = true;
    }
    return "Database connection ";
  }
}

const connection1 = Database.getConnection();
console.log(connection1);

const connection2 = Database.getConnection();
console.log(connection2);
