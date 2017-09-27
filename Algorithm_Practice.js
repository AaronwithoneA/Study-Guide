

const bSearch = (arr, target) => {
  if (arr.length < 1) {
    return -1;
  }
  const pivotIdx = arr.length/2;
  const pivot = arr[pivotIdx];
  if (target < pivot) {
    let left = arr.slice(0, pivotIdx);
    return bSearch(left);
  }
  if (target < pivot) {
    let right = arr.slice(pivotIdx + 1);
    let sub = bSearch(right);
    sub === -1 ? -1 : sub + pivot + 1;
  }
};

// Write a function `moreDotLessDash(str)` that takes in a string and
// returns the true if the string contains more dots ('.') than dashes
// ('-'), false otherwise.
// Examples:
// moreDotLessDash('2-D arrays are fun. I think.'); // => true
// moreDotLessDash('.-.-.'); // => true
// moreDotLessDash('.-'); // => false
// moreDotLessDash('..--'); // => false
// ***********************************************************************/

function moreDotLessDash(str) {
  var dotCount = 0;
  var dashCount = 0;

  for (var i = 0; i < str.length; i += 1) {
    var char = str[i];

    if (char === '.') {
      dotCount += 1;
    } else if (char === '-') {
      dashCount += 1;
    }
  }

  return (dotCount > dashCount);
}
