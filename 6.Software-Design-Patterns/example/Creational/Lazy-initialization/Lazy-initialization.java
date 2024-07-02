import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Database {

    private static volatile CompletableFuture<Database> connection = null;
    private static final ExecutorService executor = Executors.newSingleThreadExecutor(); 

    private Database() {} 

    // Database connection simulation
    public static synchronized CompletableFuture<String> getConnection() throws InterruptedException {
        if (connection == null) {
            System.out.println("Connecting...");
            connection = CompletableFuture.supplyAsync(() -> {
                try {
                    Thread.sleep(1000); // Simulate connection delay
                    return new Database();
                } catch (Exception e) {
                    throw new RuntimeException(e); 
                }
            }, executor);
        }
        return connection.thenApply(db -> db.getConnectionMessage());
    }

    private String getConnectionMessage() {
        return "Database connection established";
    }

    public static void main(String[] args) throws Exception {
        try {
            CompletableFuture<String> connection1 = Database.getConnection();
            System.out.println(connection1.get()); 

            CompletableFuture<String> connection2 = Database.getConnection();
            System.out.println(connection2.get());
        } catch (Exception e) {
            System.out.println("An error occurred while using the database: " + e.getMessage());
        } finally {
            executor.shutdown(); 
        }
    }
}
