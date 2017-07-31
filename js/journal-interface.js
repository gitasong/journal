var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var newEntry = new Entry();
    var wordCount = newEntry.getWordNumber(body);
    var vowelCount = newEntry.countVowels(body);
    var consonantCount = newEntry.countConsonants(body);
    $("#word-count").text(wordCount);
    $("#vowel-count").text(vowelCount);
    $("#consonant-count").text(consonantCount);
  });
});
