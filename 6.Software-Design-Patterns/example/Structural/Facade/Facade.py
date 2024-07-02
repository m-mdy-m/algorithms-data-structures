class Light:
  """Represents a single lightbulb."""
  def turn_on(self):
    print("Light turned on")

  def turn_off(self):
    print("Light turned off")

class LightSystem:
  """Represents the complex subsystem: the LightSystem."""
  def __init__(self):
    self.kitchen_light = Light()
    self.living_room_light = Light()

  def turn_on_kitchen_lights(self):
    self.kitchen_light.turn_on()

  def turn_off_kitchen_lights(self):
    self.kitchen_light.turn_off()

  def turn_on_living_room_lights(self):
    self.living_room_light.turn_on()

  def turn_off_living_room_lights(self):
    self.living_room_light.turn_off()

class LightController:
  """Facade class simplifying interaction with the LightSystem."""
  def __init__(self):
    self.light_system = LightSystem()

  def turn_on_all_lights(self):
    self.light_system.turn_on_kitchen_lights()
    self.light_system.turn_on_living_room_lights()

  def turn_off_all_lights(self):
    self.light_system.turn_off_kitchen_lights()
    self.light_system.turn_off_living_room_lights()

# Usage
light_controller = LightController()

light_controller.turn_on_all_lights()  # Output: Light turned on (twice)
light_controller.turn_off_all_lights()  # Output: Light turned off (twice)
