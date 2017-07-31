function Entry() {
};

Entry.prototype.getWordNumber = function(body) {
  var wordArray = body.split(" ");
  console.log(wordArray);
  wordArrayLen = wordArray.length;
  console.log(wordArrayLen);
  return wordArrayLen;
};
