use std::thread::sleep;
use std::time::{Duration, Instant};

struct Node {
    name: String,
}

impl Node {
    fn new(name: &str) -> Node {
        Node {
            name: name.to_string(),
        }
    }

    fn connect(&self) {
        println!("{} is connecting...", self.name);
    }

    fn disconnect(&self) {
        println!("{} is disconnecting...", self.name);
    }
}

struct Circuit<'a> {
    node1: &'a Node,
    node2: &'a Node,
    path: Option<(Instant, Vec<&'a Node>)>,
    bandwidth: String,
    resources: Vec<String>,
    communications: Option<Communications<'a>>,
    start_time: Option<Instant>,
}

struct Communications<'a> {
    connections: Connections<'a>,
}

struct Connections<'a> {
    one: &'a Node,
    two: &'a Node,
    bandwidth: String,
    resources: Vec<String>,
    path: Option<(Instant, Vec<&'a Node>)>,
    time: Instant,
}

impl<'a> Circuit<'a> {
    fn new(node1: &'a Node, node2: &'a Node) -> Circuit<'a> {
        Circuit {
            node1,
            node2,
            path: None,
            bandwidth: "1k".to_string(),
            resources: Vec::new(),
            communications: None,
            start_time: None,
        }
    }

    fn connect(&mut self) {
        if self.path.is_some() {
            println!("Circuit is already established.");
            return;
        }

        self.start_time = Some(Instant::now());
        self.path = Some((self.start_time.unwrap(), vec![self.node1, self.node2]));
        self.resources.push(self.bandwidth.clone());
        self.communications = Some(Communications {
            connections: Connections {
                one: self.node1,
                two: self.node2,
                bandwidth: self.bandwidth.clone(),
                resources: self.resources.clone(),
                path: self.path.clone(),
                time: self.start_time.unwrap(),
            },
        });

        println!(
            "Circuit established between {} and {}",
            self.node1.name, self.node2.name
        );
    }

    fn disconnect(&mut self) {
        if self.path.is_none() {
            println!("No active circuit to disconnect.");
            return;
        }

        let end_time = Instant::now();
        let duration = end_time.duration_since(self.start_time.unwrap()).as_secs();

        println!("Circuit disconnected. Duration: {} seconds", duration);

        self.path = None;
        self.resources.clear();
        self.communications = None;
        self.start_time = None;
    }
}

fn main() {
    let node_a = Node::new("Node A");
    let node_b = Node::new("Node B");
    let mut circuit = Circuit::new(&node_a, &node_b);

    circuit.connect();
    sleep(Duration::from_secs(5));
    circuit.disconnect();
}
