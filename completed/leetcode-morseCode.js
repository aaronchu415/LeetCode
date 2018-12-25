/**
 Link: https://leetcode.com/problems/unique-morse-code-words/

 International Morse Code defines a standard encoding where each letter
 is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b"
 maps to "-...", "c" maps to "-.-.", and so on.


Now, given a list of words, each word can be written as a
concatenation of the Morse code of each letter.
For example, "cba" can be written as "-.-..--...",
(which is the concatenation "-.-." + "-..." + ".-").
We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have

Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2

Explanation:
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".

 * @param {string[]} words
 * @return {number}
 */

let words = ["gin", "zen", "gig", "msg"]

var uniqueMorseRepresentations = function (words) {

    let morseCodeList = [
        ".-",
        "-...",
        "-.-.",
        "-..",
        ".",
        "..-.",
        "--.",
        "....",
        "..",
        ".---",
        "-.-",
        ".-..",
        "--",
        "-.",
        "---",
        ".--.",
        "--.-",
        ".-.",
        "...",
        "-",
        "..-",
        "...-",
        ".--",
        "-..-",
        "-.--",
        "--.."
    ];

    //for each word in array
    let codeMessages = words.map(word => {

        //holds the current word as code form
        let wordInCode = "";

        //loop through each letter and turn into code
        [...word].forEach(c => {

            //get the current letter as character number
            let code = c.charCodeAt(0);

            //minus 97 from it to map a to 0, b to 1, etc
            let modifiedCode = code - 97;
            //get the morse code from the morse code array
            let morseCode = morseCodeList[modifiedCode];

            //concat the morse code for current letter to string
            wordInCode = wordInCode.concat(morseCode);

        })
        //add morse code to array
        return wordInCode;
    })

    //return the count of the number of distinct morse codes
    return codeMessages.filter(function (item, pos) {
        return codeMessages.indexOf(item) === pos;
    }).length

}

console.log(uniqueMorseRepresentations(words));