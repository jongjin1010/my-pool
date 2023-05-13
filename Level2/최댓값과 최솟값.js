function solution(s) {
  return (
    Math.max.apply(null, s.split(" ").map(Number)) +
    " " +
    Math.min.apply(null, s.split(" ").map(Number))
  );
}
