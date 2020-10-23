var path = require('path');

module.exports = {
    entry: './debugging.js',
    target: 'node',
    mode: 'production',
    output: {
        filename: 'executable.js',
        path: path.resolve(__dirname),
    },
};
