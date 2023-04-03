// const fs = require("fs").promises;

// fs.readFile("163.txt", "utf8").then((data) => {
//   fs.readFile("172.txt", "utf8").then((data1) => {
//     const trimmedLines1 = [...new Set(data.split('\n'))].map((line) => line.trim())
//     console.log(trimmedLines1.length)
//     const trimmedLines2 = [...new Set(data1.split('\n'))].map((line) => line.trim())
//     console.log(trimmedLines2.length)
//     const result = trimmedLines1.filter((line) => !trimmedLines2.includes(line))
//     console.log(result.length)
//     console.log(`(${result.join(',')})`)
//   });
// });

const fs = require("fs").promises;

const splitTrim = (data) =>
  [...new Set(data.split("\n"))].map((line) => line.trim());
const readFile = async () => {
  const txt_l63 = splitTrim(await fs.readFile("163.txt", "utf8"));
  console.log(txt_l63.length);
  const txt_172 = splitTrim(await fs.readFile("172.txt", "utf8"));
  console.log(txt_172.length);
  const result = txt_l63.filter(
    (line) => !txt_172.includes(line)
  );
  console.log(result.length);
  console.log(`(${result.join(",")})`);
};

readFile();
