package main

import (
	"fmt"
)

// Light represents a single lightbulb
type Light struct{}

// turnOn turns on the light
func (l *Light) turnOn() {
	fmt.Println("Light turned on")
}

// turnOff turns off the light
func (l *Light) turnOff() {
	fmt.Println("Light turned off")
}

// LightSystem manages multiple lights
type LightSystem struct {
	kitchenLight Light
	livingRoomLight Light
}

// NewLightSystem creates a new LightSystem
func NewLightSystem() *LightSystem {
	return &LightSystem{
		kitchenLight: Light{},
		livingRoomLight: Light{},
	}
}

// turnOnKitchenLights turns on the kitchen light
func (ls *LightSystem) turnOnKitchenLights() {
	ls.kitchenLight.turnOn()
}

// turnOffKitchenLights turns off the kitchen light
func (ls *LightSystem) turnOffKitchenLights() {
	ls.kitchenLight.turnOff()
}

// turnOnLivingRoomLights turns on the living room light
func (ls *LightSystem) turnOnLivingRoomLights() {
	ls.livingRoomLight.turnOn()
}

// turnOffLivingRoomLights turns off the living room light
func (ls *LightSystem) turnOffLivingRoomLights() {
	ls.livingRoomLight.turnOff()
}

// LightController is the facade for interacting with the LightSystem
type LightController struct {
	lightSystem *LightSystem
}

// NewLightController creates a new LightController
func NewLightController(ls *LightSystem) *LightController {
	return &LightController{
		lightSystem: ls,
	}
}

// turnOnAllLights turns on all lights
func (lc *LightController) turnOnAllLights() {
	lc.lightSystem.turnOnKitchenLights()
	lc.lightSystem.turnOnLivingRoomLights()
}

// turnOffAllLights turns off all lights
func (lc *LightController) turnOffAllLights() {
	lc.lightSystem.turnOffKitchenLights()
	lc.lightSystem.turnOffLivingRoomLights()
}

func main() {
	// Create a LightSystem
	lightSystem := NewLightSystem()

	// Create a LightController using the LightSystem
	lightController := NewLightController(lightSystem)

	// Use the LightController to manage lights
	lightController.turnOnAllLights()
	lightController.turnOffAllLights()
}
