class Multiton<T> {
  private static readonly instances: Map<string, Multiton<any>> = new Map();
  private readonly id: string;

  private constructor(id: string) {
    this.id = id;
  }

  public static getInstance(key: string): Multiton<any> {
    if (!this.instances.get(key)) {
      Multiton.instances.set(key, new Multiton(key));
    }
    return this.instances.get(key)!;
  }
  public log(message: string): void {
    console.log(`Logger : ${message}`);
  }
}
const example_1 = Multiton.getInstance("app");
example_1.log("This is the first logger instance");

const example_2 = Multiton.getInstance("api");
example_2.log("This is the second logger instance");

console.log(example_1 === example_2);
