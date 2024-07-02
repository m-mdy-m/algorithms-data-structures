package main

import "fmt"

// UserAddress represents the address information for a user
type UserAddress struct {
  City    string `json:"city"`
  Country string `json:"country"`
}

// User represents a user with name and address
type User struct {
  Name     string     `json:"name"`
  Address  UserAddress `json:"address"`
}

// NewUser creates a new User object
func NewUser(name string, address UserAddress) *User {
  return &User{Name: name, Address: address}
}

// Clone creates a deep copy of the User object
func (u *User) Clone() *User {
  // Create a new User object with a copy of the address
  return NewUser(u.Name, UserAddress{City: u.Address.City, Country: u.Address.Country})
}

func main() {
  // Create a prototype user
  prototypeUser := NewUser("Prototype User", UserAddress{City: "Prototype City", Country: "Prototype Country"})

  // Clone the prototype user
  clonedUser := prototypeUser.Clone()

  fmt.Println("Prototype User:", prototypeUser)
  fmt.Println("Cloned User:", clonedUser)

  // Modify the cloned user
  clonedUser.Name = "Cloned User"
  clonedUser.Address.City = "Cloned City"

  fmt.Println("Prototype User (after modification):", prototypeUser)
  fmt.Println("Cloned User (after modification):", clonedUser)
}
