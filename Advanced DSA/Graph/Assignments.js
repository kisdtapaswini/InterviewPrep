//Q1. Path in Directed Graph using Adjacency list
//  let A = 5;
//  let B = [
//         [1, 2],
//         [4, 1],
//         [2, 4],
//         [3, 4],
//         [5, 2],
//         [1, 3]
//     ];
//A1 = 5;
//B1 = [  [1, 2],
    //    [2, 3],
    //    [3, 4], 
    //    [4, 5] ];

function getGraph(A, B){
    let matrixG = new Array(A+1).fill(null).map(()=> new Array(A+1).fill(0));
    for(let i = 0; i < B.length; i++){
        let row = B[i][0];
        let col = B[i][1];
        matrixG[row][col] = 1;
    }
  // console.log(matrixG);
    return findPathInDirectedGraph(A, matrixG);
}
function findPathInDirectedGraph(dest, adjMat){
    let q = [];
    let set = new Set();
    let source = 1;
    q.push(source);
    set.add(source);
    while(q.length !== 0){
        const node = q.shift();
        let connectedTotal = adjMat[node];
        console.log(connectedTotal);
        for(let i = 0; i < connectedTotal.length; i++){
            if(connectedTotal[i] === 1){
                if(i === dest){
                    return true;
                }   
                if(!set.has(i)){
                    set.add(i);
                    q.push(i);
                }
            }

        }
    }
    return 0;
}

//console.log(getGraph(A1, B1));

//Q2.Shortest Distance in a Maze

class NodeData{
    constructor(row, col, dist){
        this.row = row;
        this.col = col;
        this.dist = dist;
    }
}
// class coOrdinates {
//     constructor(i, j){
//         this.i = i;
//         this.j = j;
//     }
// }
let A1 = [ [0, 0, 0, 1, 0], 
           [0, 1, 0, 0, 0],
           [0, 0, 0, 1, 0],
           [1, 0, 1, 0, 0]];

let B1 = [1, 0];

let C1 = [2, 4];

function solve(A, B, C){
    let source = new NodeData(B[0], B[1], 0);
    let q = [];
    let visited = new Array(A.length).fill(null).map(()=> new Array(A[0].length).fill(null));
    q.push(source);
    while(q.length != 0){

        let curr = q.shift();
        if(curr.row === C[0] && curr.col === C[1]){
            return curr.dist;
        }
        let dx = [1, 0, -1, 0];
        let dy = [0, 1, 0, -1];
        for(let i = 0; i< 4; i++){
            let newRow = curr.row ;
            let newCol = curr.col ;
            let newDist = curr.dist;
            // while(newRow >= 0 && newRow < A.length && newCol >= 0 && newCol < A[0].length && A[newRow][newCol] == 0){
            //     newRow +=  dx[i];
            //     newCol += dy[i];
            //     newDist++;
            // }
            newRow += dx[i];
            newCol += dy[i];
            newDist++;
            if(newRow >= 0 && newRow < A.length && newCol >= 0 && newCol < A[0].length && A[newRow][newCol] == 0){
                if(!visited[newRow][newCol]){
                    q.push(new NodeData(newRow, newCol, newDist));
                    console.log(q, visited);
                    visited[newRow][newCol] = true;
                }
            }

        }
    }
    return -1;

}
console.log(solve(A1, B1, C1));

//Q3. Cycle in Directed Graph


    function solve1(A, B){
        let mapG = new Map();
            for(let i = 1; i <= A; i++){
                mapG.set(i, new Array());
            }
            for(let i = 0; i < B.length; i++){
                mapG.get(B[i][0]).push(B[i][1]);
            }
            return isCyclePresent(mapG);
       }
       function isCyclePresent(adjList){
        let q = [];
        let visited = new Set();
        let source = 1;
        q.push(source);
        visited.add(source);
        while(q.length !== 0){
            const node = q.shift();
            let connections = adjList.get(node);

            for(let i = 0; i < connections.length; i++){
                if(visited.has(connections[i])){
                    return 1;
                }else{
                    visited.add(connections[i]);
                    q.push(connections[i]);
                }

            }
        }
        return 0;
       }
      // A11 = 5;
     //  B11 = [[1,2],[1,3],[2,3],[1,4],[4,3],[4,5],[3,5]]
              
        //   console.log(solve(A11, B11));