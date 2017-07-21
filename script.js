function findLongestWord(str) {
  var splitString = str.split(' ');
  console.log(splitString);
  var j = 0;
  splitString.forEach(function(i){
    if (i.length > j) {
      j = i.length;
    }
    return j;
  });
  console.log(j);
}
