function solution(arr) {
  var answer = [];

  arr.forEach((element, index) => {
    if (arr[index] !== arr[index + 1]) {
      answer.push(element);
    }
  });

  return answer;
}
