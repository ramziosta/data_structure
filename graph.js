function sum(array, target){
    for (let i = 0; i < array.length; i++){
        let  hashMap = new Map();
        let compliment = target - array[i];

        if (hashMap.has(compliment)){
            return [i, hashMap.get(compliment)];
        } else {
            hashMap.set(array[i], i);
        }
    }
}

sum([2, 7,11,15],9);


class UndirectedGraph {
    constructor() {
        this.adjacencyList = {}; // Initialize an empty object to store the adjacency list
    }

    addVertex(vertex) {
        // Add a vertex with an empty array as its value if not already present
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            console.log(this.adjacencyList);
        }
    }

    addEdge(vertex1, vertex2) {
        // Add vertex2 to vertex1's adjacency list
        this.adjacencyList[vertex1].push(vertex2);

        // Add vertex1 to vertex2's adjacency list since it's an undirected graph
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        // Remove vertex2 from vertex1's adjacency list
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            (v) => v !== vertex2
        );

        // Remove vertex1 from vertex2's adjacency list
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            (v) => v !== vertex1
        );
    }

}

const graph = new UndirectedGraph();

graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("Paris");

graph.addEdge("Dallas", "Tokyo");
graph.addEdge("Dallas", "Paris");
graph.addEdge("Tokyo", "Paris");

console.log(graph.adjacencyList);