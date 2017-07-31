var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function(event) {
  event.preventDefault();
  $("#journal-form").submit(function() {
    var title = $("#title").val();
    var body = $("#body").val();
    var newEntry = new Entry();
    var wordCount = newEntry.getWordNumber(body);
    $("#word-count").text(wordCount);
  });
});
