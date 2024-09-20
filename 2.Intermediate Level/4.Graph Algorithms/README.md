## Shortest Path Algorithms

- **Dijkstra's Algorithm**
  - Finds the shortest path from a single source to all other nodes in a graph with non-negative weights.
  - Utilizes a priority queue for efficiency.
- **Bellman-Ford Algorithm**
  - Computes shortest paths from a single source to all vertices in a graph, handling negative weights.
  - Can detect negative weight cycles.

## Minimum Spanning Tree Algorithms

- **Kruskal's Algorithm**
  - Finds a minimum spanning tree for a connected weighted graph.
  - Sorts all edges in the graph and adds them one by one to the tree, avoiding cycles.
- **Prim's Algorithm**
  - Builds the minimum spanning tree by starting from an arbitrary vertex and expanding it by adding the cheapest edge that connects a vertex in the tree to a vertex outside the tree.

## Network Flow Algorithms

- **Ford-Fulkerson Algorithm**
  - Computes the maximum flow in a flow network.
  - Uses augmenting paths and capacity constraints.
- **Edmonds-Karp Algorithm**
  - An implementation of the Ford-Fulkerson method using BFS to find augmenting paths, ensuring polynomial time complexity.

## Advanced Network Flow

- **Maximum Bipartite Matching**
  - Finds the largest matching in a bipartite graph.
  - Can be solved using network flow algorithms.
- **Circulation with Demands**
  - Generalizes network flow problems by introducing demands and supplies at vertices.
  - Ensures flow conservation and meets vertex demands.

## Directed Acyclic Graphs (DAG)

- **Topological Sorting**
  - Linear ordering of vertices such that for every directed edge `uv`, vertex `u` comes before `v`.
  - Useful in scheduling tasks, finding dependencies.
- **Longest Path in DAG**
  - Unlike general graphs, the longest path in a DAG can be found using dynamic programming or topological sort.
  - Applications in project scheduling and other planning problems.
