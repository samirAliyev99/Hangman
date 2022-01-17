var words = ["red","blue","green","yellow"];
var random_word = words[Math.floor(Math.random() * words.length)];

console.log(random_word);

var word_letters = [];
word_letters = random_word.split("");

// document.getElementById("start").onclick = function(word_letters) {
//     for (var i in word_letters){
//         var element = document.createElement("div");
//         document.getElementById('letter_word').appendChild(element);

//     }
//     //define your function;
// }






document.getElementById("start").onclick=function(){

            for(var i=0 ;i<word_letters.length;i++){
        var btn = document.createElement("button");
        btn.innerHTML = "______";
        btn.id="letter";
        btn.className=word_letters[i];
        document.getElementById('letter_word').appendChild(btn);

}}



document.querySelectorAll("key--letter").onclick=function(e){

    


    for(var i=0 ;i<word_letters.length;i++){
var btn = document.createElement("button");
btn.innerHTML = "______";
btn.id="letter";
btn.className=word_letters[i];

document.getElementById('letter_word').appendChild(btn);

}}

