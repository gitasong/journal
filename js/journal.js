function Entry() {
};

Entry.prototype.getWordNumber = function(body) {
  var wordArray = body.split(" ");
  wordArrayLen = wordArray.length;
  return wordArrayLen;
};

exports.entryModule = Entry;
