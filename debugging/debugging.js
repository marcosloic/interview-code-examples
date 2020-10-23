/*
A bit different than just code. The setup is simple. The following script loads a file in the current working directory and prints the value
It works fine if you execute it (node ./debugging.js) but if you run webpack over it, you will get an error (data.json does not exist);

The cause is a side effect of webpack itself on the "require" function. You do not expect the candidate to know, but to figure out.
It's well documented so it is relatively easy to find out. You expect the user to find what's going on, and to mitigate it.
 */

const path = require('path');

function run() {
    const dataPath = path.join(process.cwd() ,'data.json');
    const data = require(dataPath);
    console.log(data.myKey);
}

run()
