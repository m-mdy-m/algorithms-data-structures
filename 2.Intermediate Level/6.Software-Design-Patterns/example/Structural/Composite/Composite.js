// Define a base component class
class Component {
  constructor(name) {
    this.name = name;
  }

  operation() {
    throw new Error("This method should be overridden!");
  }
}

// Define a Leaf component (cannot have children)
class Leaf extends Component {
  operation() {
    console.log(`Leaf: ${this.name} - Performing operation`);
  }
}

// Define a Composite component (can have children)
class Composite extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }
  remove(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }
  operation() {
    console.log(`Composite: ${this.name} - Performing operation`);
    for (const child of this.children) {
      child.operation();
    }
  }
}

// Create Leaf components
const leaf1 = new Leaf('Leaf 1');
const leaf2 = new Leaf('Leaf 2');

// Create Composite components
const composite1 = new Composite('Composite 1');
composite1.add(leaf1);

const composite2 = new Composite('Composite 2');
composite2.add(leaf2);
composite2.add(composite1); // Composite can have another Composite as a child

// Call operation on composites
composite2.operation();