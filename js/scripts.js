$(document).ready(function() {
  $("#form1").submit(function(event){
    var sentence = $("#sentence").val();

    var words = sentence.split([" "]);
    console.log(words);
    var wordsOver3 = [];
    words.forEach(function(word){
      var length = word.length;
      if (length >= 3) {
        wordsOver3.push(word);
      }
    });
    console.log(wordsOver3);
    wordsOver3.reverse();
    console.log(wordsOver3);
    var newSentence = wordsOver3.join(" ");
    console.log(newSentence);
    alert(newSentence);
    event.preventDefault();
  });
});
