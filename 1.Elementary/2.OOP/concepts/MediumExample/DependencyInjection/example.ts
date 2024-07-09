// **1. Constructor Injection:**

class Logger {
  log(message: string): void {}
}
class UserService {
  private logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }
  getUser(userId: number) {
    this.logger.log(`Fetching user with ID ${userId}`);
  }
}
const logger = new Logger();
const userService = new UserService(logger);
userService.getUser(123);
// **2. Setter Injection:**
// Logger interface
interface Logger {
  log(message: string): void;
}

// UserService class with setter injection
class UserService {
  private logger: Logger;

  // Specify type for the logger parameter
  setLogger(logger: Logger): void {
    this.logger = logger;
  }

  getUser(userId: number): void {
    this.logger.log(`Fetching user with ID ${userId}`);
  }
}

// Usage
const userService = new UserService();
const logger = {
  log(message: string): void {
    console.log(message);
  },
};
userService.setLogger(logger);
userService.getUser(123);
// **3. Interface Injection:**
class logger {
  log(message: string): void {
    console.log(message);
  }
}
class Loggable {
  protected logger : Logger
  setLogger(logger: Logger): void {
    this.logger = logger;
  }
}

class UserService extends Loggable {
  private logger: Logger;

  setLogger(logger: Logger): void {
    this.logger = logger;
  }

  getUser(userId: number): void {
    this.logger.log(`Fetching user with ID ${userId}`);
  }
}
// Usage
const userService = new UserService();
const logger = new Logger();
userService.setLogger(logger);
userService.getUser(123);

// **4. Method Injection:**

// Dependency interface
class Logger4 {
  log(message: string): void {
    console.log(message);
  }
}

// Class with method injection
class UserService {
  private logger: Logger;
  getUser(userId: string, logger: Logger): void {
    logger.log(`Fetching user with ID ${userId}`);
  }
}

// Usage
const userService = new UserService4();
const logger = new Logger4();
userService.getUser(123, logger);