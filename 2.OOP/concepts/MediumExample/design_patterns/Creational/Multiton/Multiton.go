package main

import (
	"fmt"
	"sync"
)

// Multiton represents the Multiton pattern
type Multiton struct {
	id string
}

// instances stores instances of Multiton
var (
	instances = make(map[string]*Multiton)
	lock      sync.Mutex
)

// getInstance returns an instance of Multiton associated with the provided key
func getInstance(key string) *Multiton {
	lock.Lock()
	defer lock.Unlock()

	if instances[key] == nil {
		instances[key] = &Multiton{id: key}
	}
	return instances[key]
}

// log prints a log message
func (m *Multiton) log(message string) {
	fmt.Printf("Logger %s: %s\n", m.id, message)
}

func main() {
	example1 := getInstance("app")
	example1.log("This is the first logger instance")

	example2 := getInstance("api")
	example2.log("This is the second logger instance")

	fmt.Println(example1 == example2) // Should print false
}
