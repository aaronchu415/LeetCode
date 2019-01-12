let word1 = "sea";

var permutate = function(word1) {
  let w = word1.split("");

  for (let i = 0; i < w.length; i++) {
    let c = w[i];

    let remaining = w.filter(function(value, index) {
      return index !== i;
    });

    for (let j = 0; j < remaining.length; j++) {
      let c2 = c + remaining[j];

      remaining2 = remaining.filter(function(value, index) {
        return index !== j;
      });

      for (let k = 0; k < remaining2.length; k++) {
        remaining3 = remaining2.filter(function(value, index) {
          return index !== k;
        });

        console.log(c2 + remaining2[k], remaining3);
      }
    }
  }
};

var helper = function(c, remaining, output) {
  if (remaining.length === 0) {
    console.log(output);
    return;
  }
};

permutate(word1);
