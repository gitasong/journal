var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var newEntry = new Entry();
    var wordCount = newEntry.getWordNumber(body);
    $("#word-count").text(wordCount);
  });
});
