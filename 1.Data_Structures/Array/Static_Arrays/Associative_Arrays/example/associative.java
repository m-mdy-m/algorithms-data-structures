import java.util.HashMap;
import java.util.Map;

public class associative {
    public static void main(String[] args) {
        // Creating a HashMap to act as an associative array
        Map<String, String> associativeArray = new HashMap<>();

        // Adding a key-value pair to the HashMap
        associativeArray.put("hello", "associative");

        // Printing the HashMap
        System.out.println(associativeArray);
    }
}
