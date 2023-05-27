const fs = require("fs");
const readline = require("readline");
const ytLink = require("./yt");
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("");
console.log("....................................................");
console.log("       This Tool Present by Learning Journey        ");
console.log("````````````````````````````````````````````````````");
console.log("");
userInput.question("Enter your link:~$ ", (value) => {
  console.log(value);
  fs.writeFile(
    "link.js",
    `const offerLink = "vnd.youtube://www.youtube.com/redirect?event=comments&redir_token=testtoken=https://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbEM2ck5Ka0p3c2I3cFZmRGdZTjRyWGRyZTVMd3xBQ3Jtc0tsbXV2cDNFeWdzRkNOMmhPMnNob2lNSzNrNGJoR0l6UlktN21BNHBOdHUyNHVTZXpaMFUxZnYwWU1DNll6QmhVbHh6V3lUWUJTVDhqd2JkbUktQkR3d3pmVkZPSkYtdUxFU3M0N2tfb3ZjMWtDTUd2aw&q=https%3A%2F%2Fzbzneg.unfamiiliardates.com%2F%3Futm_source%3Dda57dc555e50572d%26s1%3D147536%26s2%3D1770831%26s5%3DNayeem%26j1%3D1&html_redirect=1";,
    function (err) {
      console.log("Link set seccussful.");
 
      process.exit();
    }
  );
  //
  fs.writeFile("./st/link.js", `const offerLink = "${value}";`, function (err) {
    console.log("Link set seccussful.");
    process.exit();
  });
});
