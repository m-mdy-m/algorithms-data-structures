import datetime, time
class Circuit:
    def __init__(self, node1,node2):
        self.node1 = node1
        self.node2 = node2
        self.path = None
        self.bandwidth = { "one_second": "1k" }
        self.resources = []
        self.communications = None
        self.startTime = None
    def connect(self):
        if self.path != None:
            print("Circuit is already established.")
            return
        self.startTime = datetime.datetime.now()
        self.path = {"time":self.startTime,"switches":[self.node1,self.node2]}  
        self.resources.append(self.bandwidth)
        self.communications = {
            "connections":{
                "one": self.node1,
                "two": self.node2,
                "bandwidth": self.bandwidth,
                "resources": self.resources,
                "path": self.path,
                "time": self.startTime,
            }
        }
        print("Circuit established between",self.node1,"and",self.node2)
    def disconnect(self) :
        if self.path  == None:
          return print("No active circuit to disconnect.")
        endTime =  datetime.datetime.now()
        duration = (endTime - self.startTime) / 1000

        print(f"Circuit disconnected. Duration: {duration} seconds")
        self.path = None
        self.resources = []
        self.communications = None
        self.startTime = None

class Node:
    def __init__(self,name):
        self.name = name
        self.resources = []

    def connect(self):
     print(self.name, "is connecting...")
    

    def disconnect(self):
        self.resources = []
        print(self.name, "is disconnecting...")

if __name__ == "__main__":
    nodeA = Node("Node A")
    nodeB = Node("Node B")
    circuit = Circuit(nodeA, nodeB)

    circuit.connect()
    time.sleep(5)
    circuit.disconnect()