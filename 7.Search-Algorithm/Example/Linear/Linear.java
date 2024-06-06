public class LinearSearch {
    public static int linearSearch(int[] array, int num) {
        for (int i = 0; i < array.length; i++) {
            if (array[i] == num) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] number = {10, 2, 4, 1, 5};
        System.out.println(linearSearch(number, 4)); // 2
        System.out.println(linearSearch(number, 6)); // -1
    }
}