// const http = require("http");
// const fs = require("fs");
// const ejs = require("ejs");

// const name = "Solbi";
// const courses = [
//   { name: "HTML" },
//   { name: "CSS" },
//   { name: "JS" },
//   { name: "NODE" },
// ];
// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   const url = req.url;
//   if (url === "/") {
//     ejs
//       .renderFile("./template/index.ejs", { name })
//       .then((data) => res.end(data));
//   } else if (url === "/courses") {
//     ejs
//       .renderFile("./template/courses.ejs", { courses })
//       .then((data) => res.end(data));
//   } else {
//     ejs
//       .renderFile("./template/not-found.ejs", { name })
//       .then((data) => res.end(data));
//   }
// });

// server.listen(8080);
