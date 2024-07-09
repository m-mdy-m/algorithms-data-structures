class Singleton {
  private static instance: Singleton;

  private constructor() {}
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

function client() {
  var example_1 = Singleton.getInstance();
  var example_2 = Singleton.getInstance();
  if (example_1 === example_2) {
    console.log("Singleton works, both variables contain the same instance.");
  } else {
    console.log("Singleton failed, variables contain different instances.");
  }
}
client();
