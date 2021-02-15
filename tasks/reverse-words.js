function reverseWords(arr) {
  if (!arr && !arr.length) {
    return arr;
  }

  var res = [];
  var word = [];
  var addWord = () => {
    if (word.length > 0) {
      word.reverse();
      res.push(...word);
      word = []
    }
  };
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i].match(/\s/)) {
      addWord();
      res.push(arr[i])
    } else {
      word.push(arr[i])
    }
  }
  addWord();
  return res;
}