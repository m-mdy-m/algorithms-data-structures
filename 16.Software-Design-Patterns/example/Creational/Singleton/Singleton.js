class SingletonJs {
  static instance = null;

  constructor() {
    if (SingletonJs.instance) {
      throw new Error(
        "Singleton cannot be instantiated directly. Use getInstance() instead."
      );
    }
    SingletonJs.instance = this;
  }

  static getInstance() {
    if (!SingletonJs.instance) {
      SingletonJs.instance = new SingletonJs();
    }
    return SingletonJs.instance;
  }
}

function clientJs() {
  const example1 = SingletonJs.getInstance();
  const example2 = SingletonJs.getInstance();
  if (example1 === example2) {
    console.log("Singleton works, both variables contain the same instance.");
  } else {
    console.log("Singleton failed, variables contain different instances.");
  }
}

clientJs();
