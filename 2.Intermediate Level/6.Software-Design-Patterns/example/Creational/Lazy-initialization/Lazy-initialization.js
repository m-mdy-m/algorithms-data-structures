class DatabaseJs {
  static connection;
  constructor() {}
  // Database connection simulation
  static async getConnection() {
    if (!this.connection) {
      console.log("Connecting...");
      try {
        this.connection = new Promise((resolve) => {
          setTimeout(() => {
            resolve(new DatabaseJs());
          }, 100);
        });
      } catch (error) {
        console.error("Error establishing database connection:", error);
        throw error;
      }
    }
    return (await this.connection).getConnectionMessage();
  }
  getConnectionMessage() {
    return "Database connection established";
  }
}
(async () => {
  try {
    const connection1 = await DatabaseJs.getConnection();
    console.log(connection1);

    const connection2 = await DatabaseJs.getConnection();
    console.log(connection2);
  } catch (error) {
    console.error("An error occurred while using the database:", error);
  }
})();
