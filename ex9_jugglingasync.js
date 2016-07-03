
const http = require('http'),
      bl = require('bl');
var urlList = process.argv.slice(2)

var dataList = [],
    counter = 0;

function getData(url, index) {

	http.get(url, function (response) {

		response.pipe(bl(function (err, data) {
	
			if (err) {
				console.error(err)
			}

			dataList[index] = data.toString()
			++counter

			if (counter == 3) {
				printData()
			}
		}))
	})
}

function printData() {

	for (var data of dataList) {
		console.log(data)
	}	
}

for (var i = 0; i < urlList.length; ++i) {
	getData(urlList[i], i)
}