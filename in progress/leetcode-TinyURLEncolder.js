let longURL = "https://leetcode.com/problems/design-tinyurl"
let shortURL = "http://tinyurl.com/4e9iAk"

/**

 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {

    let cleanedURL = longUrl.replace("https://", "");
    console.log(cleanedURL);
};

encode(longURL);

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */