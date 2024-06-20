let fs = require("fs");
let path = require("path");

let filePath = path.join(__dirname, "example.txt");
let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}

let isVisited = new Array(n).fill(false);
let selectIndex = [];
let result = "";

function dfs(arr, depth) {
  if (depth == n) {
    for (let i of selectIndex) result += arr[i] + " ";
    result += "\n";
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (isVisited[i]) continue;
    selectIndex.push(i);
    isVisited[i] = true;
    dfs(arr, depth + 1);
    selectIndex.pop();
    isVisited[i] = false;
  }
}

dfs(arr, 0);
console.log(result);
