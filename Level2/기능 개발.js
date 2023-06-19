function solution(progresses, speeds) {
  var answer = [];
  var days = [];

  for (let index = 0; index < progresses.length; index++) {
    var number = 100 - progresses[index];
    days.push(Math.ceil(number / speeds[index]));
  }

  var count = 1;
  var maxDay = days[0];

  for (let index = 1; index < days.length; index++) {
    if (days[index] <= maxDay) {
      count++;
    } else {
      answer.push(count);
      maxDay = days[index];
      count = 1;
    }
  }

  answer.push(count);

  return answer;
}
