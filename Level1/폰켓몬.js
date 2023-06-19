function solution(nums) {
  var answer = 0;

  const data = new Set(nums);

  if ([...data].length > nums.length / 2) {
    answer = nums.length / 2;
  } else {
    answer = [...data].length;
  }

  return answer;
}
