function solution(sizes) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      let temp = sizes[i][0];
      sizes[i][0] = sizes[i][1];
      sizes[i][1] = temp;
    }

    if (a < sizes[i][0]) {
      a = sizes[i][0];
    }

    if (b < sizes[i][1]) {
      b = sizes[i][1];
    }
  }

  var answer = a * b;
  return answer;
}
