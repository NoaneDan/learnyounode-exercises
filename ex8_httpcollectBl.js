
const http = require('http')
const bl = require('bl')
var url = process.argv[2]

var result = ''
http.get(url, function(response) {

	response.pipe(bl(function (err, data) {
		if (err) {
			return console.log(err)
		}

		console.log(data.length)
		console.log(data.toString())
	}))
})