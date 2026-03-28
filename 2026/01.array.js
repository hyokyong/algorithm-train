//숫자 배열이 주어졌을 때, 각 숫자를 제곱한 새 배열을 반환하세요.
// const input = [1, 2, 3, 4, 5];
// 기대 출력: [1, 4, 9, 16, 25]
const input = [1, 2, 3, 4, 5];
const newMapArray = input.map((item) => item * item);
console.log(newMapArray);

//문자열 배열에서 길이가 4 이상인 단어만 추려내세요.
//const words = ["cat", "apple", "dog", "banana", "hi"];
// 기대 출력: ["apple", "banana"]
const words = ["cat", "apple", "dog", "banana", "hi"];
const newFilterArray = words.filter((item) => item.length > 3);
console.log(newFilterArray);
