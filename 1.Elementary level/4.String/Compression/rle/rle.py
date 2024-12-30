def encode_rle(input_str: str) -> str:
    encoded = ""
    count = 1

    for i in range(1, len(input_str) + 1):
        if i < len(input_str) and input_str[i] == input_str[i - 1]:
            count += 1
        else:
            if count == 1:
                encoded += input_str[i - 1]
            elif count == 255:
                encoded += f"255{chr(count)}{input_str[i - 1]}"
            else:
                encoded += f"{count}{input_str[i - 1]}"
            count = 1

    return encoded


def decode_rle(encoded_str: str) -> str:
    decoded = ""
    i = 0

    while i < len(encoded_str):
        if (
            i + 4 < len(encoded_str) and
            encoded_str[i:i+3] == "255"
        ):
            count = ord(encoded_str[i + 3])
            character = encoded_str[i + 4]
            decoded += character * count
            i += 5
        elif encoded_str[i].isdigit():
            count = ""
            while i < len(encoded_str) and encoded_str[i].isdigit():
                count += encoded_str[i]
                i += 1
            character = encoded_str[i]
            decoded += character * int(count)
            i += 1
        else:
            # Handle single characters (no run length)
            decoded += encoded_str[i]
            i += 1

    return decoded


def get_size_in_bits(s: str) -> int:
    return len(s) * 8  # 1 character = 1 byte = 8 bits


# Test the implementation
input_str = "aaabccdddd"
encoded_str = encode_rle(input_str)
decoded_str = decode_rle(encoded_str)

print("Original input:", input_str)
print("Size before compression:", get_size_in_bits(input_str))
print("Encoded output:", encoded_str)
print("Size after compression:", get_size_in_bits(encoded_str))
print("Decoded output:", decoded_str)
print("Size Decode:", get_size_in_bits(decoded_str))
print("======================================")