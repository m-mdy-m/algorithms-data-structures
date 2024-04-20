class Connection:
    def __init__(self):
        print("Creating a new connection...")
    def connect(self):
        print("Connected!")
class ConnectionPool:
    def __init__(self,maxSize):
        self.pool = []
        self.maxSize = maxSize
    def get_connection(self):
        if len(self.pool) >= self.maxSize:
                raise ValueError("Maximum pool size reached")
        if self.pool:
            connection = self.pool.pop()
            print("Obtained connection from pool")
            return connection
        connection = Connection()
        return connection
    def release_connection(self,connection):
        print("Releasing connection back to pool")
        self.pool.append(connection)

pool = ConnectionPool(2)
connection1 = pool.get_connection()
print("connection1:", connection1)
connection1.connect()
pool.release_connection(connection1)

connection2 = pool.get_connection()
connection2.connect()
pool.release_connection(connection2)

connection3 = pool.get_connection()
connection3.connect()
pool.release_connection(connection3)

connection4 = pool.get_connection()
connection4.connect()
pool.release_connection(connection4)