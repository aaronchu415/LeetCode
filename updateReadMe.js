const fs = require("fs");

const heading = `# LeetCode
Below are my solutions to Algorithm problems
    
My [Leetcode Profile](https://leetcode.com/aaronchu415/) 
    `;

const tableHeading = `| Problem                                        | Solution            | Category      |
| ---------------------------------------------- | ------------------- | ------------- |`;

const githubBaseURL =
  "https://github.com/aaronchu415/LeetCode/blob/master/completed/";

function main() {
  let markdown = generateMarkup();

  fs.writeFile("./README.md", markdown, function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
}

function generateMarkup() {
  let fileList = fs.readdirSync("./completed");

  let output = heading + "\n" + tableHeading + "\n";

  fileList.forEach(file => {
    let lines = require("fs")
      .readFileSync(`../leetcode/completed/${file}`, "utf-8")
      .split("\n")
      .filter(Boolean);

    let problemName = findAttribute("_NAME: ", lines);
    let problemLink = findAttribute("_LINK: ", lines);
    let solutionName = getSolutionName(file);
    let solutionLink = getSolutionLink(file);
    let category = findAttribute("_CATEGORY: ", lines);

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

  lines.forEach(l => {
    if (l.includes(attr)) {
      let indexAfterAttr = l.indexOf(attr) + attr.length;
      output = l.substring(indexAfterAttr);
      return;
    }
  });

  return output;
}

main();
