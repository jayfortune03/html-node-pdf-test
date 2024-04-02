// const HTMLtoPDF = require("html-pdf-node");
// const fs = require("fs");

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

var liveServer = require("live-server");

var params = {
  port: 8181, // Set the server port. Defaults to 8080.
  host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
  root: "/", // Set root directory that's being served. Defaults to cwd.
  open: false, // When false, it won't load your browser by default.
  file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
  wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
  mount: [["/components", "./node_modules"]], // Mount a directory to a route.
  logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
  middleware: [
    function (req, res, next) {
      next();
    },
  ], // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);
