
const http = require('http'),
      bl = require('bl');
      async = require('async')
var urlList = process.argv.slice(2)

var dataList = [],
    counter = 0;

function getData(url, callback) {

	http.get(url, function (response) {
		
		response.pipe(bl(function (err, data) {
			
			if (err) {
				console.error(err)
			}

			dataList[counter++] = data.toString()
			callback()
		}))
	})
}

function printData(err) {

	if (err) {
		console.log(err)
	}

	for (var data of dataList) {
		console.log(data)
	}
}

async.each(urlList, getData, printData)