// _NAME: Word Break
// _LINK: https://leetcode.com/problems/word-break/
// _CATEGORY: String
/**

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/*                     Recursion Tree. 
        Example 'catscatsanddog' ["cats", "dog", "sand", "and", "cat"]

                                    {remainingS}
                                    catscatsanddog
        scatsanddog (removed cat)       anddog (removed cats) 
            return 0                          dog (removed and) 
                                              "" (removed dog) 
                                              return 1
        
we hit base case return 0 if no more words can be removed
we hit base case return 1 if remainingS is ""

*/

let input = "catscatsanddog";
let wordDict = ["cats", "dog", "sand", "and", "cat"];

var wordBreak = function(s, wordDict) {
  //turn wordArray into map for O(1) look up
  //(not sure why the input is an Array)
  let map = {};
  wordDict.forEach(w => {
    map[w] = 1;
  });

  //adding a parameter to memo
  //if we found an answer then set to true
  //this will help avoid unecessary calls later on
  let memo = { FoundAnswer: false };

  //if we found a solution then return true
  return helper(memo, s, map) > 0;
};

var helper = function(memo, remainingS, wordDict) {
  //if we found an answer somewhere then dont do any work and just return
  if (memo["FoundAnswer"] === true) {
    return 1;
  }

  //base case
  //if we able to match all strings then return sucess (1)
  if (remainingS === "") return 1;

  //if we already computed answer, just return answer
  if (memo[remainingS]) {
    return memo[remainingS];
  }

  //this will hold our current word
  let currW = "";

  //set intital answer to failure (0)
  let c = 0;

  //loop through each character
  for (let i = 0; i < remainingS.length; i++) {
    //and append to currW
    currW += remainingS[i];

    //if current word is in the provided dic
    //then we want to get rid of all occurence of that word (from left to right only)
    if (wordDict[currW]) {
      //this will provide us a string that was rid of all occurence of currW
      let s = cleanString(remainingS, currW, i);

      //recursve using the new string until we hit basecase
      c += helper(memo, s, wordDict);
    }
  }

  //if there is a path to get rid of all letters then c will be > 0
  //and we would have found a solution
  //if that is the case then 'foundAnswer' to be true to avoid unecessary calls
  if (c > 0) {
    memo["FoundAnswer"] = true;
  }
  //if not then memoize the answer for future lookup
  memo[remainingS] = c;

  //return the answer
  return c;
};

var cleanString = function(s, currW, i) {
  //while there are repeats of the currW in the s from left to right, get rid of it
  do {
    s = s.substring(i + 1);
  } while (s.substring(0, i + 1) === currW);

  return s;
};

console.log(wordBreak(input, wordDict));
//console.log(cleanString("catscatscatssscats", "cats", 3));
