class Database {
  private static connection: Promise<Database> | null = null;

  private constructor() {}

  // Database connection simulation
  static async getConnection(): Promise<string> {
    if (!this.connection) {
      console.log("Connecting...");
      try {
        this.connection = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(new Database());
          }, 1000);
        });
      } catch (error) {
        console.error("Error establishing database connection:", error);
        throw error; 
      }
    }

    return (await this.connection).getConnectionMessage();
  }

  private getConnectionMessage(): string {
    return "Database connection established";
  }
}

(async () => {
  try {
    const connection1 = await Database.getConnection();
    console.log(connection1);

    const connection2 = await Database.getConnection();
    console.log(connection2);
  } catch (error) {
    console.error("An error occurred while using the database:", error);
  }
})();
