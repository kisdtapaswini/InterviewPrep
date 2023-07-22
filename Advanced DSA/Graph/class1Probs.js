//Q1. Given an undirected unweighted graph with source S and dest D.
// Check if there exists any path from S to D.
// Here adjacency matrix is given with index values are same as (nodes - 1)
let adjList = [
            [2, 4],
            [1, 4, 3],
            [2, 5],
            [1, 2, 5],
            [4, 3, 6],
            [5],
            [8],
            [7]
];

function ifPathExists(adjList, source = 1, dest = 7){
    let q = new Array();
    q.push(source);
    let visited = new Set();
    while(q.length != 0){
        let node = q.shift();
        source = node;
        let connections = adjList[source-1];  //
        console.log(connections);
        for(let connection of connections){
            if(connection === dest){
                return "Path exists";
            }
            if(!visited.has(connection)){
                visited.add(connection);
                q.push(connection);
            }
        }
    }
    return "Path doesn't exist";

}
// console.log(ifPathExists(adjList));

//Q2. Given a connected unidirectional, unweighted graph, source and destination nodes.
// Fnd the length of shortest path from S to D.

let adjList1 = new Map();
adjList1.set("A", ["B", "D"]);
adjList1.set("B", ["A"]);
adjList1.set("C", ["D"]);
adjList1.set("D", ["A", "C", "E", "G"]);
adjList1.set("E", ["F", "D", "G", "H"]);
adjList1.set("F", ["E"]);

//console.log(shortestPath(adjList1));

function shortestPath(adjList1, source = "A", dest = "H"){
        let q = new Array();
        q.push({"val" : "A" , "dist" :0});
        let visited = new Set();
        
        while(q.length != 0){
            let node = q.shift();
            visited.add(node.val);
            for(let elem of adjList1.get(node.val)){
                if(elem === dest){
                    return node.dist + 1;
                }
                if(!visited.has(elem)){
                    let obj = {"val" :elem , 
                                "dist" : node.dist + 1};

                    q.push(obj);
                    
                }
            }
        }
        return "no path";

}

//Q3. Given an undirected weighted graph with source S and destination D. Find
// the min weighted path S to D.
// The weights are 0 <= weight(i) <=2

let adjListWithWt = new Map();
adjListWithWt.set("A", [{node : "B", wt: 1}, {node : "D", wt: 0}]);
adjListWithWt.set("B", [{node : "A", wt: 1}]);
adjListWithWt.set("C", [{node : "D", wt: 2}]);
adjListWithWt.set("D", [{node : "A", wt: 0},
{node : "C", wt: 2}, {node : "E", wt: 2},{node : "G", wt: 1}]);
adjListWithWt.set("E", [{node : "F", wt: 1}, {node : "D", wt: 2}, {node : "G", wt:   0}, {node : "H", wt: 2}]);
adjListWithWt.set("F", [{node : "E", wt: 1}]);
adjListWithWt.set("G", [{node : "D", wt: 1}, {node : "E", wt: 0}]);
adjListWithWt.set("H", [{node : "E", wt: 2}]);

console.log(shortestPathWithWt(adjListWithWt));

function shortestPathWithWt(adjListWithWt, source = "A", dest = "H"){
        let q = new Array();
        q.push({node : source, wt: 0});
        let visited = new Set();
        let minDist = Number.MAX_SAFE_INTEGER;
        while(q.length != 0){
            let curr = q.shift();
            if(visited.get())
            visited.add(curr);
            for(let elem of adjListWithWt.get(curr.node)){
                if(elem.node === dest){
                    console.log(elem.node);
                    minDist = Math.min(minDist, elem.wt  + curr.wt);
                }
                if(!visited.has(elem.node)){
                    let obj = {
                        node : elem.node,
                        wt : curr.wt + elem.wt
                    }
                    q.push(elem);
                }
            }
        }
        return minDist;

}






