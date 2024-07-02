from typing import Dict

# User address dataclass (for type hinting and immutability)
class Address:
    def __init__(self, city: str, country: str) -> None:
        self.city = city
        self.country = country


# User class with dataclass for type hinting and immutability
class User:
    def __init__(self, name: str, address: Address) -> None:
        self.name = name
        self.address = address

    def clone(self) -> "User":
        """Creates a deep copy of the User object."""
        return User(self.name, Address(self.address.city, self.address.country))


def main() -> None:
    prototype_user = User("Prototype User", Address("Prototype City", "Prototype Country"))
    cloned_user = prototype_user.clone()

    print("Prototype User:", prototype_user)
    print("Cloned User:", cloned_user)

    # Modifying the cloned user
    cloned_user.name = "Cloned User"
    cloned_user.address.city = "Cloned City"

    print("Prototype User (after modification):", prototype_user)
    print("Cloned User (after modification):", cloned_user)


if __name__ == "__main__":
    main()
