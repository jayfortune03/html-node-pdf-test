// const HTMLtoPDF = require("html-pdf-node");
const fs = require("fs");

// const file = { content: "<h1>Welcome to html-pdf-node</h1>" };
// const options = { format: "A4" };

// HTMLtoPDF.generatePdf(file, options).then((data) => {
//   console.log("PDF Buffer:-", data);

//   fs.writeFile("test.pdf", data, (err) => {
//     if (err) {
//       console.error("There was an error writing the file:", err);
//     } else {
//       console.log("File has been written successfully");
//     }
//   });
// });

fs.readFile("./logo.svg", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Convert the file data to a Base64 string
  const base64String = data.toString("base64");

  // Console log the Base64 string
  console.log(base64String);
});
