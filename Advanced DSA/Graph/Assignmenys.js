//Q1. Path in Directed Graph
 let A = 5;
 let B = [
        [1, 2],
        [4, 1],
        [2, 4],
        [3, 4],
        [5, 2],
        [1, 3]
    ];

function getGraph(A1, B1){
    let Graph =  new Array(A+1).fill(null).map(()=>[]);
    for(let i = 0; i < B1.length; i++){
        let m = B1[i][0]
        Graph[m].push(B1[i][1]);
    }
   return findPathInDirectedGraph(A1, Graph);
}
function findPathInDirectedGraph(dest, Graph){
    let q = [];
    let set = new Set();
    let source = 1;
    q.push(source);
    set.add(source);
    while(q.length !== 0){
        const node = q.shift();
        for(let i = 0; i < Graph[node].length; i++){
            let node1 = Graph[node][i]
            if(!set.has(node1)){
                set.add(node1);
                if(node1 === dest){
                    return 1;
                }
                q.push(node1);
            }

        }
    }
    return 0;
}

console.log(getGraph(A, B));