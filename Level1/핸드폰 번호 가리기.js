function solution(phone_number) {
  let answer = "";

  for (let index = 0; index < phone_number.length - 4; index++) {
    answer += "*";
  }

  return answer + phone_number.slice(-4);
}
