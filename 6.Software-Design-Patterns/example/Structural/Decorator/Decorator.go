package main

import "fmt"

type Beverage interface {
	getDescription() string
	getCost() float64
}
type Coffee struct{}

func (this Coffee) getDescription() string {
	return "Coffee"
}
func (this Coffee) getCost() float64 {
	return 1.5
}

type CondimentDecorator struct {
	beverage Beverage
}

func (this *CondimentDecorator) getDescription() string {
	return this.beverage.getDescription()
}
func (this *CondimentDecorator) getCost() float64 {
	return this.beverage.getCost()
}

type Milk struct {
	CondimentDecorator
}

func (this Milk) getDescription() string {
	return this.CondimentDecorator.getDescription() + ",MILK"
}
func (this Milk) getCost() float64 {
	return this.CondimentDecorator.getCost() + 0.50
}

type Sugar struct {
	CondimentDecorator
}

func (this Sugar) getDescription() string {
	return this.CondimentDecorator.getDescription() + ",Sugar"
}
func (this Sugar) getCost() float64 {
	return this.CondimentDecorator.getCost() + 0.25
}
func main() {
	beverage := Coffee{}
	fmt.Printf("Beverage: %s, Cost: $%.2f\n", beverage.getDescription(), beverage.getCost())

	// Add Milk decorator
	milkBeverage := Milk{CondimentDecorator{beverage}}
	fmt.Printf("Beverage: %s, Cost: $%.2f\n", milkBeverage.getDescription(), milkBeverage.getCost())

	// Add Sugar decorator to the Milk-decorated beverage
	sugarBeverage := Sugar{CondimentDecorator{milkBeverage}}
	fmt.Printf("Beverage: %s, Cost: $%.2f\n", sugarBeverage.getDescription(), sugarBeverage.getCost())
}