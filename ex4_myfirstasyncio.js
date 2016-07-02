
const fs = require('fs')
var file = process.argv[2]

// a callback is used to process the data after is read
fs.readFile(file, 'utf8', function (err, data) {
	
	if (err) {
		throw err
	}

	var newlines = data.split('\n').length - 1
	console.log(newlines)
})