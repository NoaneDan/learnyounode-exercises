
const fs = require('fs')
const path = require('path')

module.exports = function (dir, ext, callback) {
	
	ext = '.' + ext
	fs.readdir(dir, function (err, data) {
		if (err) {
			return callback(err)
		}

		var filteredFiles = data.filter(file => path.extname(file) == 
			ext)

		return callback(null, filteredFiles)
	})
}
