$(function(){
  $("#wordPuzzle").submit(function(event){
    event.preventDefault();
    var word = $("#enterWord").val();
    codingWord = [];
    for(i =0; i<= word.length; i++){
      if(word[i]==='a' || word[i]==='e' ||word[i]==='i' ||word[i]==='o' ||word[i]==='u'){
        codingWord[i]='-';
      }
      else {
        codingWord[i]= word[i];
      }
    }
      var codingWordString = codingWord.slice();
      $("#codingWord").text(codingWordString.join(''));
    });
  });



    // for (var v = 0; v < split.length; v += 1){
      // for ( v=0; v < vowels.length; v++){
      //   function









































// Count to: 30
// Count by: 5
// Output: 5, 10, 15, 20, 25, 30
//
// Count to: 50
// Count by: 7
// Output: 7, 14, 21, 28, 35, 42, 49÷

// for (var index = 1; index <= 50; index += 7) {
//   alert(index);
// }


// $(document).ready(function() {
// var elements = ["h1", "p", "img"];
//
//  elements.forEach(function(element) {
//   $(element).click(function(event) {
//     alert("This is a(n) " + element + " element");
//
//     event.preventDefault();
//     });
//   });
// });

// var names = ['Bill', 'John', 'Mary'];
// for (var index = 0; index < names.length; index += 1) {
//   alert('I love ' + names[index] + '!');
// }
