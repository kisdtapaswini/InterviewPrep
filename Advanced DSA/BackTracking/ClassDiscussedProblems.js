/**
 * 1. Backtracking is a technique which helps to find a solution by exploring all possible candidates
 * 2.
 */

// Q1. Find all n digit numbers which can be formed with {1, 2}.
function print(i, n, tempAns) {
  if (i === n) {
    console.log(tempAns);
    return;
  }
  tempAns[i] = 1;
  print(i + 1, n, tempAns);

  tempAns[i] = 2;
  print(i + 1, n, tempAns);
}
print(0, 3, []);
