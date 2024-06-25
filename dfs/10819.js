let fs = require("fs");
let path = require("path");

let filePath = path.join(__dirname, "example.txt");
let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function dsf(graph, v, visited) {
  console.log("v", v);
  visited[v] = true;
  console.log(v);

  for (let i of graph[v]) {
    if (!visited[i]) {
      dsf(graph, i, visited);
    }
  }
}

const graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];

const visited = new Array(9).fill(false);

dsf(graph, 1, visited);
