let sentence =  "The movie is not that bad, I like it.";

const wordNot = sentence.indexOf("not"); 

const wordBad = sentence.indexOf("bad");

if (wordBad != -1 && wordNot !=1 && wordBad > wordNot) {
    sentence = sentence.substring(0,wordNot) + "good" + sentence.substring(wordBad + 3, sentence.length); 
}
console.log(sentence);
