function solution(s) {
  const arr = s.toLowerCase().split(" ");

  return arr
    .map((value) => value.charAt(0).toUpperCase() + value.substring(1))
    .join(" ");
}
