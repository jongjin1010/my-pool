/**
 * 효율성 검사 불합격
 */

function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    count += s[i] === "(" ? 1 : -1;
    if (count < 0) break;
  }
  return stack === 0 ? true : false;
}
