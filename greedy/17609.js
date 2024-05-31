let fs = require("fs");
let path = require("path");

let filePath = path.join(__dirname, "example.txt");
let input = fs.readFileSync(filePath).toString().split("\n");

let number = Number(input[0]);
let result = "";

for (let i = 1; i <= number; i++) {
  let arr = input[i].split("");
  let last = arr.length - 1;
  let num = 100;

  // 절반만 돌아라
  for (let j = 0; j < parseInt(arr.length / 2); j++) {
    //회문 체크
    if (arr[j] == arr[last]) {
      last--;

      //마지막이야
      if (j == parseInt(arr.length / 2) - 1) {
        num = 0;
      }
    }

    // 유사회문 또는 아님
    else {
      let arr2 = arr.filter((_, index) => index != j);
      let arr3 = arr.filter((_, index) => index != last);

      let last2 = arr2.length - 1;
      let last3 = arr3.length - 1;

      //2
      for (let k = 0; k < parseInt(arr2.length / 2); k++) {
        if (arr2[k] == arr2[last2]) {
          //마지막이야
          if (k == parseInt(arr2.length / 2) - 1) {
            num = 1;
          }
        }
        last2--;
      }

      //2
      for (let k = 0; k < parseInt(arr3.length / 2); k++) {
        if (arr3[k] == arr3[last3]) {
          //마지막이야
          if (k == parseInt(arr3.length / 2) - 1) {
            num = 1;
          }
        }
        last3--;
      }

      if (num != 1 || num != 0) {
        num = 2;
      }

      break;
    }
  }
  result += num + "\n";
}

console.log(result);
