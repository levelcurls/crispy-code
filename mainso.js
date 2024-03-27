 exports.burrowsWheeler.encode = function(str) {
    str = '$' + str;
    var combinations = [];
    for (let i = 0; i < str.length; i += 1) {
      combinations.push(str.substring(i) + str.substring(0, i));
    }
    var sorted = combinations.sort();
    var result = [];
    for (let i = 0; i < sorted.length; i += 1) {
      result.push(combinations[i][str.length - 1]);
    }
    return result.join('');
  }

  exports.burrowsWheeler.decode = function(encodedStr) {
    const sortedCharSequence = encodedStr.split('').sort().join('');
    const leftSide = {};
    const rightSide = {};
    var maxEachCharLeft = {};
    var maxEachCharRight = {};

    for (let i = 0; i < encodedStr.length; i += 1) {
      var idLeft = sortedCharSequence[i];
      if (idLeft in maxEachCharLeft) {
//yes
