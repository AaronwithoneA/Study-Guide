

const merge = (left, right) => {
  let merged = [];
  while(left.length > 0 && right.length > 0) {
    left[0] >= right[0] ? merged.push(right[0]) : merged.push(left[0]);
  }
  return merged;
};

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
