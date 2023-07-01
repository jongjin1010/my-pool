/**
 * 실패 (시간 초과)
 */

const array = [];

function solution(numbers, target) {
  var answer = 0;

  cacluate("", 0, numbers.length);

  for (let i = 0; i < array.length; i++) {
    let string = "";

    for (let j = 0; j < array[i].length; j++) {
      string += array[i][j] + numbers[j];
    }

    if (eval(string) == target) {
      answer++;
    }
  }

  return answer;
}

function cacluate(type, count, maxCount) {
  if (count == maxCount) {
    array.push(type);
    return;
  }

  cacluate(type + "+", count + 1, maxCount);
  cacluate(type + "-", count + 1, maxCount);
}
