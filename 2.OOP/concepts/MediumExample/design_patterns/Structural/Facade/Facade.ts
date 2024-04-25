// This class represents a single lightbulb
class Light {
  on(): void {
    console.log("Light turned on");
  }

  off(): void {
    console.log("Light turned off");
  }
}

// This class represents the complex subsystem: the LightSystem
class LightSystem {
  private kitchenLight: Light;
  private livingRoomLight: Light;

  constructor() {
    this.kitchenLight = new Light();
    this.livingRoomLight = new Light();
  }

  // These methods control individual lights within the system
  turnOnKitchenLights(): void {
    this.kitchenLight.on();
  }

  turnOffKitchenLights(): void {
    this.kitchenLight.off();
  }

  turnOnLivingRoomLights(): void {
    this.livingRoomLight.on();
  }

  turnOffLivingRoomLights(): void {
    this.livingRoomLight.off();
  }
}

// This class acts as the facade, simplifying interaction with the LightSystem
class LightController {
  private lightSystem: LightSystem;

  constructor() {
    this.lightSystem = new LightSystem();
  }

  // These methods provide a simplified interface for controlling all lights
  turnOnAllLights(): void {
    this.lightSystem.turnOnKitchenLights();
    this.lightSystem.turnOnLivingRoomLights();
  }

  turnOffAllLights(): void {
    this.lightSystem.turnOffKitchenLights();
    this.lightSystem.turnOffLivingRoomLights();
  }
}

// Create an instance of the facade (LightController)
const lightController: LightController = new LightController();

// Use the facade's methods to control all lights at once
lightController.turnOnAllLights(); // Output: Light turned on (twice)
lightController.turnOffAllLights(); // Output: Light turned off (twice)
