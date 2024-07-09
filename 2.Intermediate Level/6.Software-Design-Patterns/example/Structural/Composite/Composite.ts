abstract class Component {
  protected readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract operation(): void;
}
class Leaf extends Component {
  override operation(): void {
    console.log(`Leaf: ${this.name} - Performing operation`);
  }
}
class Composite extends Component {
  private readonly children: Component[];
  constructor(name: string) {
    super(name);
    this.children = [];
  }
  add(child: Component): void {
    this.children.push(child);
  }
  remove(child: Component) {
    const index = this.children.indexOf(child);
    if (index !== -1) this.children.splice(index, 1);
  }
  operation(): void {
    console.log(`Composite: ${this.name} - Performing operation`);
    for (const child of this.children) {
      child.operation();
    }
  }
}
// Create Leaf components
const leaf1 = new Leaf("Leaf 1");
const leaf2 = new Leaf("Leaf 2");

// Create Composite components
const composite1 = new Composite("Composite 1");
composite1.add(leaf1);

const composite2 = new Composite("Composite 2");
composite2.add(leaf2);
composite2.add(composite1); // Composite can have another Composite as a child

// Call operation on composites
composite2.operation();
