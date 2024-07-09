class MultitonJs {
    static instances = new Map();
  
    constructor(id) {
      this.id = id;
    }
  
    static getInstance(key) {
      if (!this.instances.has(key)) {
        this.instances.set(key, new MultitonJs(key));
      }
      return this.instances.get(key);
    }
  
    log(message) {
      console.log(`Logger (${this.id}): ${message}`);
    }
  }
  
  const example__1 = MultitonJs.getInstance("app");
  example__1.log("This is the first logger instance");
  
  const example__2 = MultitonJs.getInstance("api");
  example__2.log("This is the second logger instance");
  
  console.log(example__1 === example__2);
  