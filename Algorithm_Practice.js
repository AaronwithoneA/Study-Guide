

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

  return dotCount > dashCount;
}

function isSorted(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]) {
      return false;
    }
  }

  return true;
}

function toFeet(distances) {
  var distancesInFeet = [];

  for (var i = 0; i < distances.length; i += 1) {
    var dis = distances[i];
    var parts = dis.split(' ');
    var num = parts[0];
    var unit = parts[1];

    if (parts[1] === 'yards') {
      var newDis = (num * 3) + ' feet';

      distancesInFeet.push(newDis);
    } else {
      distancesInFeet.push(dis);
    }
  }

  return distancesInFeet;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i  <= Math.sqrt(num); i += 1) {
    if (num % i === 0){
      return false
    }
  }

  return true;
}

function smallestPrime(array) {
  var smallest = null;

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];

    if (isPrime(num) && (num < smallest || smallest === null)) {
      smallest = num;
    }
  }

  return smallest;
}

function safeSpeedChange(speeds) {

  for (var i = 0; i < speeds.length - 1; i += 1) {
    var diff = speeds[i + 1] - speeds[i];

    if (Math.abs(diff) > 5) {
      return false;
    }
  }

  return true;
}
