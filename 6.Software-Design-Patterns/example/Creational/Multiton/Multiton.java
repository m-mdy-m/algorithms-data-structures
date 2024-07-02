import java.util.HashMap;
import java.util.Map;

public class Multiton<T> {
    private static final Map<String, Multiton<?>> instances = new HashMap<>();
    private final String id;

    private Multiton(String id) {
        this.id = id;
    }

    public static synchronized Multiton<?> getInstance(String key) {
        if (!instances.containsKey(key)) {
            instances.put(key, new Multiton<>(key));
        }
        return instances.get(key);
    }

    public void log(String message) {
        System.out.println("Logger: " + message);
    }

    public static void main(String[] args) {
        Multiton<?> example_1 = Multiton.getInstance("app");
        example_1.log("This is the first logger instance");

        Multiton<?> example_2 = Multiton.getInstance("api");
        example_2.log("This is the second logger instance");

        System.out.println(example_1 == example_2); 
    }
}
