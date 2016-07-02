
const fs = require('fs')
const path = require('path')
var dir = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(dir, function (err, list) {

	if (err) {
		throw err
	}

	for (file of list) {
		if (path.extname(file) == ext) {
			console.log(file)
		}
	}
})