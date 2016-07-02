
// command line parameters start at index 2
// index 1: 'node'
// index 2: 'path to source file'

var sum = 0
for (var i = 2; i < process.argv.length; ++i) {
	sum += Number(process.argv[i])	
}

console.log(sum)