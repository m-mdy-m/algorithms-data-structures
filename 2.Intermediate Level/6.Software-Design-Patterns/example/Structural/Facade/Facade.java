// This class represents a single lightbulb
 class Light {
  public void turnOn() {
    System.out.println("Light turned on");
  }

  public void turnOff() {
    System.out.println("Light turned off");
  }
}

// This class represents the complex subsystem: the LightSystem
 class LightSystem {
  private Light kitchenLight;
  private Light livingRoomLight;

  public LightSystem() {
    kitchenLight = new Light();
    livingRoomLight = new Light();
  }

  // These methods control individual lights within the system
  public void turnOnKitchenLights() {
    kitchenLight.turnOn();
  }

  public void turnOffKitchenLights() {
    kitchenLight.turnOff();
  }

  public void turnOnLivingRoomLights() {
    livingRoomLight.turnOn();
  }

  public void turnOffLivingRoomLights() {
    livingRoomLight.turnOff();
  }
}

// This class acts as the facade, simplifying interaction with the LightSystem
 class LightController {
  private LightSystem lightSystem;

  public LightController() {
    lightSystem = new LightSystem();
  }

  // These methods provide a simplified interface for controlling all lights
  public void turnOnAllLights() {
    lightSystem.turnOnKitchenLights();
    lightSystem.turnOnLivingRoomLights();
  }

  public void turnOffAllLights() {
    lightSystem.turnOffKitchenLights();
    lightSystem.turnOffLivingRoomLights();
  }
}

public class Main {
  public static void main(String[] args) {
    // Create an instance of the facade (LightController)
    LightController lightController = new LightController();

    // Use the facade's methods to control all lights at once
    lightController.turnOnAllLights(); // Output: Light turned on (twice)
    lightController.turnOffAllLights(); // Output: Light turned off (twice)
  }
}
