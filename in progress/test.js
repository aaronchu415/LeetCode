let word1 = "se";
let word2 = "ea";

var minDistance = function(word1, word2) {
  helper(word1, word2);
};

var count = 0;

var hello = function(w1, w2) {
  console.log(count, w1, w2);
  count++;
  if (w1 === undefined || w2 === undefined) return;
  if (w1.length === 0 || w2.length === 0) return;

  //console.log(count, w1, w2);
  if (w1 == w2) console.log("yes");

  helper(w1.substring(1, w1.length), w2);
  helper(w1.substring(0, w1.length - 1), w2);
  helper(w1, w2.substring(1, w2.length));
  helper(w1, w2.substring(0, w2.length - 1));

  //console.log(w1.substring(0,w1.length-1))
  //console.log(w2.substring(0,w2.length-1))
};

minDistance(word1, word2);
