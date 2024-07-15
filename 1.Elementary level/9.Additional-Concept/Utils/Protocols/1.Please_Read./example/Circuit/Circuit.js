class Circuit {
  constructor(node1, node2) {
    this.node1 = node1;
    this.node2 = node2;
    this.path = null;
    this.bandwidth = { one_second: "1k" };
    this.resources = [];
    this.communications = null;
    this.startTime = null;
  }

  connect() {
    if (this.path !== null) {
      console.log("Circuit is already established.");
      return;
    }

    this.startTime = new Date();
    this.path = { time: this.startTime, switches: [this.node1, this.node2] };
    this.resources.push(this.bandwidth);
    this.communications = {
      connections: {
        one: this.node1,
        two: this.node2,
        bandwidth: this.bandwidth,
        resources: this.resources,
        path: this.path,
        time: this.startTime,
      },
    };

    console.log("Circuit established between", this.node1, "and", this.node2);
  }

  disconnect() {
    if (this.path === null) {
      console.log("No active circuit to disconnect.");
      return;
    }

    const endTime = new Date();
    const duration = (endTime - this.startTime) / 1000;

    console.log(`Circuit disconnected. Duration: ${duration} seconds`);

    this.path = null;
    this.resources = [];
    this.communications = null;
    this.startTime = null;
  }
}

class Node {
  constructor(name) {
    this.name = name;
    this.resources = [];
  }

  connect() {
    console.log(this.name, "is connecting...");
  }

  disconnect() {
    this.resources = [];
    console.log(this.name, "is disconnecting...");
  }
}
const nodeA = new Node("Node A");
const nodeB = new Node("Node B");
const circuit = new Circuit(nodeA, nodeB);

circuit.connect();
setTimeout(() => {
  circuit.disconnect();
}, 5000);
