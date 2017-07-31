function Entry() {
};

Entry.prototype.getWordNumber = function(body) {
  var wordArray = body.split(" ");
  wordArrayLen = wordArray.length;
  return wordArrayLen;
};

Entry.prototype.countVowels = function(body) {
  vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  count = 0;
  for (var i = 0; i < body.length; i++) {
    if (vowels.includes(body[i])) {
      count ++;
    };
    return count;
  };
};

Entry.prototype.countConsonants = function(body) {
  vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  count = 0;
  for (var i = 0; i < body.length; i++) {
    if (!(vowels.includes(body[i]))) {
      count ++;
    };
    return count;
  };
};

exports.entryModule = Entry;
