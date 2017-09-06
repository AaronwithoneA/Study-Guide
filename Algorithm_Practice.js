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
