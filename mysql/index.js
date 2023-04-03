// Description: 读取excel文件，连接数据库处理数据后写入excel文件

const mysql = require("mysql");
const xlsx = require("xlsx");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "database",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("数据库连接成功");
});

const workbook = xlsx.readFile("file.xlsx");
const sheetNames = workbook.SheetNames;
const worksheet = workbook.Sheets[sheetNames[0]];
const data = xlsx.utils.sheet_to_json(worksheet);
data.forEach((row,idx) => {
  // 此处可做数据处理
  console.log(row);
  if(idx === data.length - 1){
    connection.end();
    if(fs.existsSync("fileOutput.xlsx")){
      fs.unlinkSync("fileOutput.xlsx");
    }
    fs.writeFileSync("fileOutput.xlsx","");
    const newWorkbook = xlsx.utils.book_new();
    const newWorksheet = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(newWorkbook,newWorksheet,sheetNames[0]);
    xlsx.writeFile(workbook,"fileOutput.xlsx");
    process.exit(0);
  }
});



