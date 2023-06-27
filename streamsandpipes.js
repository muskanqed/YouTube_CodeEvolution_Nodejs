// streams in node

const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writeableStream = fs.createWriteStream("./file2.txt");

// readableStream.on("data", (chunk) => {
// console.log(chunk);
//   writeableStream.write(chunk);
// });

// pipes in node

readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));
