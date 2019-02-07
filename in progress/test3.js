function totalCaps(arr) {
  return arr.reduce((totalCap, word) => {
    return (
      totalCap +
      [...word].reduce((acc, letter) => {
        if (letter == letter.toUpperCase()) return acc + 1;
        return acc;
      }, 0)
    );
  }, 0);
}

console.log(totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]));
