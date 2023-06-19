function solution(priorities, location) {
  let locations = new Array(priorities.length).fill(0);
  locations[location] = 1;
  let idx = 0;
  let max = Math.max(...priorities);

  while (priorities.length > 0) {
    if (max > priorities[0]) {
      priorities.push(priorities.shift());
      locations.push(locations.shift());
    } else {
      if (locations[0] == 1) {
        return idx + 1;
      } else {
        idx++;
        locations.shift();
        priorities.shift();
        max = Math.max(...priorities);
      }
    }
  }
}
