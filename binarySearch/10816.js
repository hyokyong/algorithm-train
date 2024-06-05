let fs = require("fs");
let path = require("path");

let filePath = path.join(__dirname, "example.txt");
let input = fs.readFileSync(filePath).toString().split("\n");

let num1 = Number(input[0]);
let arr = input[1].split(" ").map(Number);
arr = arr.sort((a, b) => a - b); // 오름차순 정렬

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) {
  // =가 들어가지 않음!!!
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (target <= arr[mid]) {
      end = mid; // mid-1이 아닌 경우는 데이터가 1개만 있는 경우를 고려했기 때문
    } else {
      start = mid + 1;
    }
  }
  return end;
}

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
function upperBound(arr, target, start, end) {
  // =가 들어가지 않음!!!
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (target < arr[mid]) {
      //=가 들어가지 않는것만 차이점! 같은 값이 여러개일때 제일 마지막을 반환하고자함
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

// 정렬된 배열에서 값이 특정 범위에 속하는 원소의 개수 구하기
function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length); //end를 배열의 길이로 설정
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

let num2 = Number(input[2]);
let arr2 = input[3].split(" ").map(Number);

let result = "";

for (let i = 0; i < num2; i++) {
  result += countByRange(arr, arr2[i], arr2[i]) + " ";
}

console.log(result);

// num2 곱하기 nlongn의 시간복잡도 이기 때문에 시간초과 나지 않음!!!
