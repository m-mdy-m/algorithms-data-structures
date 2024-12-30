public class RLE {

    public static String encodeRLE(String input) {
        StringBuilder encoded = new StringBuilder();
        int count = 1;

        for (int i = 1; i <= input.length(); i++) {
            if (i < input.length() && input.charAt(i) == input.charAt(i - 1)) {
                count++;
            } else {
                if (count == 1) {
                    encoded.append(input.charAt(i - 1));
                } else if (count == 255) {
                    encoded.append("255").append((char) count).append(input.charAt(i - 1));
                } else {
                    encoded.append(count).append(input.charAt(i - 1));
                }
                count = 1;
            }
        }
        return encoded.toString();
    }

    public static String decodeRLE(String encoded) {
        StringBuilder decoded = new StringBuilder();
        int i = 0;

        while (i < encoded.length()) {
            if (i + 4 < encoded.length() && encoded.substring(i, i + 3).equals("255")) {
                int count = encoded.charAt(i + 3);
                char character = encoded.charAt(i + 4);
                decoded.append(String.valueOf(character).repeat(count));
                i += 5;
            } else if (Character.isDigit(encoded.charAt(i))) {
                StringBuilder countBuilder = new StringBuilder();
                while (i < encoded.length() && Character.isDigit(encoded.charAt(i))) {
                    countBuilder.append(encoded.charAt(i));
                    i++;
                }
                int count = Integer.parseInt(countBuilder.toString());
                char character = encoded.charAt(i);
                decoded.append(String.valueOf(character).repeat(count));
                i++;
            } else {
                // Handle single characters (no run length)
                decoded.append(encoded.charAt(i));
                i++;
            }
        }

        return decoded.toString();
    }

    public static int getSizeInBits(String str) {
        return str.length() * 8; // 1 character = 1 byte = 8 bits
    }

    public static void main(String[] args) {
        String input = "aaabccdddd";
        String encoded = encodeRLE(input);
        String decoded = decodeRLE(encoded);

        System.out.println("Original input: " + input);
        System.out.println("Size before compression: " + getSizeInBits(input));
        System.out.println("Encoded output: " + encoded);
        System.out.println("Size after compression: " + getSizeInBits(encoded));
        System.out.println("Decoded output: " + decoded);
        System.out.println("Size Decode: " + getSizeInBits(decoded));
        System.out.println("======================================");
    }
}
