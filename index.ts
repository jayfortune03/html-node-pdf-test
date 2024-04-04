const HTMLtoPDF = require("html-pdf-node");
const fs = require("fs");

const file = {
  content: ``,
};
const options = { format: "A4" };

HTMLtoPDF.generatePdf(file, options).then((data) => {
  // console.log("PDF Buffer:-", data);

  fs.writeFile("test.pdf", data, (err) => {
    if (err) {
      console.error("There was an error writing the file:", err);
    } else {
      console.log("File has been written successfully");
    }
  });
});
