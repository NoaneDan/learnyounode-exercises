
const ls = require('./ex6_lsmodule')

var dir = process.argv[2]
var ext = process.argv[3]

ls(dir, ext, function (err, data) {

	if (err) {
		return console.error(err)
	}

	for (file of data) {
		console.log(file)
	}
})