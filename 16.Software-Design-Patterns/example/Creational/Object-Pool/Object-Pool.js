class Connection {
  constructor() {
    console.log("Creating a new connection...");
  }
  connect() {
    console.log("Connected!");
  }
}
class ConnectionPool {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.pool = [];
  }
  getConnection() {
    if (this.pool.length >= this.maxSize) {
      throw new Error("Maximum poll size reached");
    }
    if (this.pool.length > 0) {
      const connection = this.pool.pop();
      console.log("Obtained connection from pool");
      return connection;
    }
    return new Connection();
  }
  releaseConnection(connection) {
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
