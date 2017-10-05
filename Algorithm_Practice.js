

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

function isUniqueAnagram(word1, word2) {

  if (word1.length !== word2.length) {
    return false;
  }

  for (var i = 0; i < word1.length; i += 1) {
    var char = word1[i];

    if (word2.indexOf(char) === -1) {
      return false;
    }
  }

  return true;
}


function indexOfLastVowel(word) {
  var vowels = 'aeiou';

  for (var i = word.length - 1; i >= 0; i--) {
    var char = word[i];
    if (vowels.indexOf(char) > -1) {
      return i;
    }
  }
}

function revHipWord(word) {
  var vowels = 'aeiou';
  var lastVowelIdx = indexOfLastVowel(word);
  var newWord = '';

  for (var i = 0; i < word.length; i++) {
    var char = word[i];
    if (vowels.indexOf(char) === -1 || i === lastVowelIdx) {
      newWord += char;
    }
  }

  return newWord;
}

function reverseHipsterfy(sentence) {
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var newWord = revHipWord(word);
    newWords.push(newWord);
  }

  return newWords.join(' ');
}

function handScore(string) {
  var value = {
    'J': 1,
    'Q': 2,
    'K': 3
  }

  var score = 0;

  for (var i = 0; i < string.length; i += 1) {
    var card = string[i];

    score += value[card];
  }

  return score;
}

function winningHand(hand1, hand2) {
  var score1 = handScore(hand1);
  var score2 = handScore(hand2);

  if (score1 > score2) {
    return hand1;
  } else if (score2 > score1) {
    return hand2;
  } else {
    return 'DRAW';
  }
}

function shiftChars(word, num) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var shifted = '';

  for (var i = 0; i < word.length; i += 1) {
    var char = word[i];
    var index = alphabet.indexOf(char);
    var newIndex = (index + num) % 26;

    shifted += alphabet[newIndex];
  }

  return shifted;
}

function uncompressString(str) {
  var newStr = '';

  for (var i = 0; i < str.length - 1; i += 2) {
    var char = str[i];
    var num = Number(str[i + 1]);

    for (var j = 0; j < num; j += 1) {
      newStr += char;
    }
  }

  return newStr;
}

function fibonacci(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [1];
  }

  var seq = [1, 1];

  for (var i = 2; i < n; i += 1) {
    var last = seq[seq.length - 1];
    var secondLast = seq[seq.length - 2];
    var next = last + secondLast;

    seq.push(next);
  }

  return seq;
}
