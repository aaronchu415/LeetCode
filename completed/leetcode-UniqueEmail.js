// _NAME: Unique Email
// _LINK: https://leetcode.com/problems/unique-email-addresses/
// _CATEGORY: Array-String-Manipulation

let emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com"
];

/**

 Every email consists of a local name and a domain name, separated by the @ sign.

For example, in alice@leetcode.com, alice is the local name,
and leetcode.com is the domain name.

Besides lowercase letters, these emails may contain '.'s or '+'s.

If you add periods ('.') between some characters in the local
name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

If you add a plus ('+') in the local name, everything after the
first plus sign will be ignored. This allows certain emails to be filtered,
for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

It is possible to use both of these rules at the same time.

Given a list of emails, we send one email to each address in the list.
How many different addresses actually receive mails?


Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com",
"testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com"
actually receive mails

 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(e) {
  //for each raw email
  let finalEmail = e.map(email => {
    //first split by @
    let splitEmail = email.split("@");

    // first part, clean up and replace "." with nothing clean up and delete
    // anything after "+"
    let firstPart = splitEmail[0].replace(".", "").split("+")[0];

    //secomd part, clean up by removing .com replace "."" with nothing
    let secondPart = splitEmail[1]
      .substring(0, splitEmail[1].length - 4)
      .replace(".", "");

    //create the clean email and return
    let cleanEmail = firstPart.concat("@", secondPart, ".com");
    return cleanEmail;
  });

  //return count of distinct emails
  return finalEmail.filter(function(item, pos) {
    return finalEmail.indexOf(item) === pos;
  }).length;
};

let num = numUniqueEmails(emails);
console.log(num);
