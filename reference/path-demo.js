const path = require('path');


// base filename
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// path object
console.log(path.parse(__filename));

// concatenate paths
console.log(path.join(__dirname, 'test', 'text.html'));




