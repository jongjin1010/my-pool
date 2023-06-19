function solution(participant, completion) {
  var answer = "";

  participant.sort();
  completion.sort();

  for (let idx = 0; idx < participant.length; idx++) {
    if (participant[idx] != completion[idx]) {
      answer = participant[idx];
      break;
    }
  }
  return answer;
}
