const fs = require('fs');
const path = require('path');


// create a foler
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
// 	if(err) throw err;
// 	console.log('folder created...');
// });

//create a file 
// fs.writeFile(path.join(__dirname, '/test', 'index.txt'), 'hello world', err => {
// 	if(err) throw err;
// 	console.log('file created ....');

// 	// append to file
// 	fs.appendFile(path.join(__dirname, '/test', 'index.txt'), ' I love node js', err => {
// 		if(err) throw err;
// 		console.log('file appended...');
// 	});

// });

// read file
fs.readFile(path.join(__dirname, '/test', 'index.txt'), 'utf8', (err, data) => {
	if(err) throw err;
	console.log(data);
});



// rename file
fs.rename(path.join(__dirname, '/test', 'index.txt'), path.join(__dirname, '/test', 'helloworld.txt'), err => {
	if(err) throw err;
	console.log('file renamed..');
});
