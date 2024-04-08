// **1. Constructor Injection:**

// Dependency interface
class Logger {
  log(message) {}
}

// Class with constructor injection
class UserService {
  constructor(logger) {
    this.logger = logger;
  }

  getUser(userId) {
    this.logger.log(`Fetching user with ID ${userId}`);
    // Logic to fetch user
  }
}

// Usage
const logger = new Logger();
const userService = new UserService(logger);
userService.getUser(123);

// **2. Setter Injection:**

// Dependency interface
class Logger {
  log(message) {}
}

// Class with setter injection
class UserService {
  setLogger(logger) {
    this.logger = logger;
  }

  getUser(userId) {
    this.logger.log(`Fetching user with ID ${userId}`);
    // Logic to fetch user
  }
}

// Usage
const userService = new UserService();
const logger = new Logger();
userService.setLogger(logger);
userService.getUser(123);

// **3. Interface Injection:**

// Dependency interface
class Logger {
  log(message) {}
}

// Interface with injector method
class Loggable {
  setLogger(logger) {}
}

// Class implementing interface
class UserService extends Loggable {
  setLogger(logger) {
    this.logger = logger;
  }

  getUser(userId) {
    this.logger.log(`Fetching user with ID ${userId}`);
    // Logic to fetch user
  }
}

// Usage
const userService = new UserService();
const logger = new Logger();
userService.setLogger(logger);
userService.getUser(123);

// **4. Method Injection:**

// Dependency interface
class Logger {
  log(message) {}
}

// Class with method injection
class UserService {
  getUser(userId, logger) {
    logger.log(`Fetching user with ID ${userId}`);
    // Logic to fetch user
  }
}

// Usage
const userService = new UserService();
const logger = new Logger();
userService.getUser(123, logger);
