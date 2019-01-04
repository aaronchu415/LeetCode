/** 
 This script auto updates the ReadMe based on content from the completed folder
*/

//bring in fs
const fs = require("fs");

//heading to display on top of table
const heading = `# LeetCode
Below are my solutions to Algorithm problems
    
My [Leetcode Profile](https://leetcode.com/aaronchu415/) 
    `;

//table headings. used https://www.tablesgenerator.com/markdown_tables for formatting
const tableHeading = `| Problem                                        | Solution            | Category      |
| ---------------------------------------------- | ------------------- | ------------- |`;

//input baseURL of where solutions are found
const githubBaseURL =
  "https://github.com/aaronchu415/LeetCode/blob/master/completed/";

//main
function main() {
  let markdown = generateMarkup(); //generate the markdown

  //overwrite or create README.md file with markdown
  fs.writeFile("./README.md", markdown, function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
}

function generateMarkup() {
  //get the solutions list
  let fileList = fs.readdirSync("./completed");

  //output starts with heading + table heading
  let output = heading + "\n" + tableHeading + "\n";

  //loop through each file
  fileList.forEach(file => {
    //get each line in the file
    let lines = require("fs")
      .readFileSync(`../leetcode/completed/${file}`, "utf-8")
      .split("\n")
      .filter(Boolean);

    //pull out the data from the lines
    let problemName = findAttribute("_NAME: ", lines);
    let problemLink = findAttribute("_LINK: ", lines);
    let solutionName = getSolutionName(file);
    let solutionLink = getSolutionLink(file);
    let category = findAttribute("_CATEGORY: ", lines);

    //generate markdown
    let markdown = `| [${problemName}](${problemLink}) | [${solutionName}](${solutionLink}) | ${category} |`;
    output += markdown + "\n";

    //console.log(problemName, problemLink, solutionName, solutionLink, category);
  });

  return output;
}

function getSolutionLink(file) {
  return githubBaseURL + file;
}

function getSolutionName(file) {
  let extension = file.split(".")[1];

  switch (extension) {
    case "js":
      return "javascript solution";
    case "py":
      return "python solution";
    case "java":
      return "java solution";
    default:
      return "solution";
  }
}

function findAttribute(attr, lines) {
  let output = "NA";

  //for each line in lines
  lines.forEach(l => {
    //if the string contains the attribute
    if (l.includes(attr)) {
      //then find where the attribute starts and get the substring after
      let indexAfterAttr = l.indexOf(attr) + attr.length;
      output = l.substring(indexAfterAttr);
      return;
    }
  });

  //return substring
  return output;
}

main();
