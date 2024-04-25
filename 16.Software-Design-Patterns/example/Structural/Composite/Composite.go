package main

import "fmt"

type Component interface {
	operation()
}
type Leaf struct {
	name string
}

func (this *Leaf) operation() {
	fmt.Println("Leaf", this.name, "- Performing operation")
}

type Composite struct {
	name     string
	children []Component
}

func (this *Composite) operation() {
	fmt.Println("Composite", this.name, "- Performing operation")
	for _, child := range this.children {
		child.operation()
	}
}
func (this *Composite) add(child Component) {
	this.children = append(this.children, child)
}
func (this *Composite) removeChild(child Component) {
	for i, candidate := range this.children {
		if candidate == child {
			this.children = append(this.children[:i], this.children...)
			return
		}
	}
}
func main() {
	// Create Leaf objects
	leaf1 := &Leaf{name: "Leaf 1"}
	leaf2 := &Leaf{name: "Leaf 2"}

	// Create Composite objects
	composite1 := &Composite{name: "Composite 1"}
	composite1.add(leaf1)

	composite2 := &Composite{name: "Composite 2"}
	composite2.add(leaf2)
	composite2.add(composite1)

	// Call operation on the root Composite
	composite2.operation()
	// Output:
	// Composite Composite 2 - Performing operation
	// Leaf Leaf 2 - Performing operation
	// Composite Composite 1 - Performing operation
	// Leaf Leaf 1 - Performing operation
}
