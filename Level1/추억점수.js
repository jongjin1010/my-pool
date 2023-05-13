function solution(name, yearning, photo) {
  //객체 형식에 그리움 점수를 담음
  const memory = {};

  for (let i = 0; i < name.length; i++) {
    memory[name[i]] = yearning[i];
  }

  // memory 객체에 해당 사람이 있으면 점수를 없으면 0을 더함
  return photo.map((arr) =>
    arr.reduce((acc, cur) => acc + (memory[cur] || 0), 0)
  );
}
