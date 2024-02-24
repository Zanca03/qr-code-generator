import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {message:"Type your url: ",
     name:"url"}
  ])
  .then((answer) => {
    var qr_svg = qr.image(answer.url);
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Failed to create")
    }
  });