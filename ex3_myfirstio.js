
// fs module: filesystem operations
const fs = require("fs")
var file = process.argv[2]

// returns Buffer object
var data = fs.readFileSync(file).toString()
var newlines = data.split('\n').length - 1

console.log(newlines)