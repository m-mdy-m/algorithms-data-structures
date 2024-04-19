class Multiton:
    _instances = {}

    def __new__(cls, key):
        if key not in cls._instances:
            cls._instances[key] = super().__new__(cls)
        return cls._instances[key]

    def __init__(self, key):
        self.id = key

    def log(self, message):
        print(f"Logger {self.id}: {message}")


# Example usage
example_1 = Multiton("app")
example_1.log("This is the first logger instance")

example_2 = Multiton("api")
example_2.log("This is the second logger instance")

print(example_1 is example_2)  # Output: False
