import java.util.ArrayList;
import java.util.List;

class Connection {
    public Connection() {
        System.out.println("Creating a new connection...");
    }

    public void connect() {
        System.out.println("Connected!");
    }
}

class ConnectionPool {
    private List<Connection> pool = new ArrayList<>();
    private int maxSize;

    public ConnectionPool(int maxSize) {
        this.maxSize = maxSize;
    }

    public Connection getConnection() {
        if (pool.size() >= maxSize) {
            throw new IllegalStateException("Maximum pool size reached");
        }

        if (!pool.isEmpty()) {
            Connection connection = pool.remove(pool.size() - 1);
            System.out.println("Obtained connection from pool");
            return connection;
        }

        Connection connection = new Connection();
        return connection;
    }

    public void releaseConnection(Connection connection) {
        System.out.println("Releasing connection back to pool");
        pool.add(connection);
    }
}

public class Main {
    public static void main(String[] args) {
        ConnectionPool pool = new ConnectionPool(2);

        Connection connection1 = pool.getConnection();
        connection1.connect();
        pool.releaseConnection(connection1);

        Connection connection2 = pool.getConnection();
        connection2.connect();
        pool.releaseConnection(connection2);

        Connection connection3 = pool.getConnection();
        connection3.connect();
        pool.releaseConnection(connection3);

        Connection connection4 = pool.getConnection();
        connection4.connect();
        pool.releaseConnection(connection4);
    }
}
