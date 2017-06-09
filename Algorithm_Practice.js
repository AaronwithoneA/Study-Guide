const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let middle = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return merge(left, right);
};

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
  let pivotIdx = arr.length/2;
  let pivot = arr[pivotIdx];
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
