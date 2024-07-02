// Light class representing a single lightbulb
class Light {
    constructor(name) {
      this.name = name;
    }
  
    turnOn() {
      console.log(`${this.name} light turned on`);
    }
  
    turnOff() {
      console.log(`${this.name} light turned off`);
    }
  }
  
  // LightSystem class representing the complex subsystem
  class LightSystem {
    constructor() {
      this.kitchenLight = new Light('Kitchen');
      this.livingRoomLight = new Light('Living Room');
    }
  
    turnOnKitchenLights() {
      this.kitchenLight.turnOn();
    }
  
    turnOffKitchenLights() {
      this.kitchenLight.turnOff();
    }
  
    turnOnLivingRoomLights() {
      this.livingRoomLight.turnOn();
    }
  
    turnOffLivingRoomLights() {
      this.livingRoomLight.turnOff();
    }
  }
  
  // LightController class acting as the facade
  class LightController {
    constructor() {
      this.lightSystem = new LightSystem();
    }
  
    turnOnAllLights() {
      this.lightSystem.turnOnKitchenLights();
      this.lightSystem.turnOnLivingRoomLights();
    }
  
    turnOffAllLights() {
      this.lightSystem.turnOffKitchenLights();
      this.lightSystem.turnOffLivingRoomLights();
    }
  }
  
  // Usage
  const lightController = new LightController();
  
  lightController.turnOnAllLights(); // Output: Kitchen light turned on, Living Room light turned on
  lightController.turnOffAllLights(); // Output: Kitchen light turned off, Living Room light turned off
  