package main

import (
	"fmt"
)

// Subject defines the interface for interacting with both RealSubject and Proxy
type Subject interface {
	Request()
}

// RealSubject represents the actual object with the requested functionality
type RealSubject struct{}

func (r *RealSubject) Request() {
	fmt.Println("RealSubject: Handling Request")
}

// Proxy acts as an intermediary for RealSubject
type Proxy struct {
	realSubject *RealSubject
}

// NewProxy creates a new Proxy instance with a reference to the RealSubject
func NewProxy(realSubject *RealSubject) *Proxy {
	return &Proxy{realSubject: realSubject}
}

// Request performs access control or additional tasks before delegating to RealSubject
func (p *Proxy) Request() {
	fmt.Println("Proxy: Checking access...")
	// Implement access control logic here (currently a placeholder)

	fmt.Println("Proxy: Forwarding request to RealSubject")
	p.realSubject.Request()
}

// clientCode takes a Subject interface and calls its Request method
func clientCode(subject Subject) {
	subject.Request()
}

func main() {
	fmt.Println("Client: Executing the client code with a real subject:")
	realSubject := &RealSubject{}
	clientCode(realSubject)

	fmt.Println("\nClient: Executing the same client code with a proxy:")
	proxy := NewProxy(realSubject)
	clientCode(proxy)
}
