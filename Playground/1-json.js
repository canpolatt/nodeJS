const fs = require("fs");
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON); // Takes JSON and gives us back the object

// console.log(parsedData.title);

//fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const data = JSON.parse(fs.readFileSync("1-json.json").toString());
data.name = "Can";
data.age = 24;
fs.writeFileSync("1-json.json", JSON.stringify(data));
