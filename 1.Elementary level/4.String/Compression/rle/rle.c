#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>
char* encodeRLE(const char* input) {
    int len = strlen(input);
    char* encoded = (char*)malloc(len * 4); 
    int count = 1, pos = 0;

    for (int i = 1; i <= len; i++) {
        if (i < len && input[i] == input[i - 1]) {
            count++;
        } else {
            if (count == 1) {
                encoded[pos++] = input[i - 1];
            } else if (count == 255) {
                sprintf(&encoded[pos], "255%c%c", count, input[i - 1]);
                pos += 5; 
            } else {
                pos += sprintf(&encoded[pos], "%d%c", count, input[i - 1]);
            }
            count = 1;
        }
    }
    encoded[pos] = '\0';
    return encoded;
}
char* decodeRLE(const char* encoded) {
    int len = strlen(encoded);
    char* decoded = (char*)malloc(len * 4); 
    int pos = 0;

    for (int i = 0; i < len;) {
        if (strncmp(&encoded[i], "255", 3) == 0) {
            int count = (int)encoded[i + 3];
            char ch = encoded[i + 4];
            for (int j = 0; j < count; j++) {
                decoded[pos++] = ch;
            }
            i += 5;
        } else if (isdigit(encoded[i])) {
            int count = 0;
            while (isdigit(encoded[i])) {
                count = count * 10 + (encoded[i] - '0');
                i++;
            }
            char ch = encoded[i];
            for (int j = 0; j < count; j++) {
                decoded[pos++] = ch;
            }
            i++;
        } else {
            decoded[pos++] = encoded[i++];
        }
    }
    decoded[pos] = '\0';
    return decoded;
}

int getSizeInBits(const char* str) {
    return strlen(str) * 8; 
}
int main() {
    const char* input = "aaabccdddd";
    char* encoded = encodeRLE(input);
    char* decoded = decodeRLE(encoded);

    printf("Original input: %s\n", input);
    printf("Size before compression: %d bits\n", getSizeInBits(input));
    printf("Encoded output: %s\n", encoded);
    printf("Size after compression: %d bits\n", getSizeInBits(encoded));
    printf("Decoded output: %s\n", decoded);
    printf("Size after decoding: %d bits\n", getSizeInBits(decoded));

    
    free(encoded);
    free(decoded);

    return 0;
}
