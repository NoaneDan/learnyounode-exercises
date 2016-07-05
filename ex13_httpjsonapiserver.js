
const http = require('http'),
      url = require('url');
var port = process.argv[2]

var server = http.createServer(function (req, res) {
	
	res.writeHead(200, { 'Content-Type' : 'application/json' })
	
	var parsetime = /^\/api\/parsetime\?iso=.+/
	var unixtime = /^\/api\/unixtime\?iso=.+/
	
	if (parsetime.test(req.url)) {
		var data = url.parse(req.url, true).query
		var date = new Date(Date.parse(data.iso))

		var JSONData = {
			'hour' : date.getHours(),
			'minute' : date.getMinutes(),
			'second' : date.getSeconds()
		}

		res.write(JSON.stringify(JSONData))
	}
	else if (unixtime.test(req.url)) {
		var data = url.parse(req.url, true).query
		var date = new Date(Date.parse(data.iso))
		
		var JSONData = {
			'unixtime' : date.getTime()
		}

		res.write(JSON.stringify(JSONData))
	}
	else {
		res.writeHead(404)
		res.write('Bad url!')
	}
	
	res.end('')
})
server.listen(port)