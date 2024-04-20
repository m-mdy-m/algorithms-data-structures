class Connection {
  constructor() {
    console.log("Creating a new connection...");
  }
  public connect(): void {
    console.log("Connected!");
  }
}

class ConnectionPool {
  private pool: Connection[] = [];
  private maxSize: number;

  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }

  public getConnection(): Connection {
    if (this.pool.length >= this.maxSize) {
      throw new Error("Maximum pool size reached");
    }

    if (this.pool.length > 0) {
      const connection = this.pool.pop();
      console.log("Obtained connection from pool");
      return connection!;
    }

    const connection = new Connection();
    return connection;
  }

  public releaseConnection(connection: Connection): void {
    console.log("Releasing connection back to pool");
    this.pool.push(connection);
  }
}
const pool = new ConnectionPool(2);

const connection1 = pool.getConnection();
console.log("connection1:", connection1);

connection1.connect();
pool.releaseConnection(connection1);

const connection2 = pool.getConnection();
connection2.connect();
pool.releaseConnection(connection2);
const connection3 = pool.getConnection();
connection3.connect();

pool.releaseConnection(connection3);
const connection4 = pool.getConnection();
connection4.connect();
pool.releaseConnection(connection4);


console.log('connection1:',connection1);
