const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const fileToString = files.reduce((acc, file) => {
            return `${acc} ${file}`;
        }, '');
        console.log(fileToString);
    });
};

module.exports.mkdir = (directory) => {
    // your code here
    fs.mkdir(directory, (err) => {
        if (err) {
            console.log('Error');
        } else {
            console.log('Success' + directory + "created");
        };
    });
  };

  module.exports.touch = (filepath, fileContent) => {
    // your code here
    fs.writeFile(filepath, fileContent, (err) => {
        if (err) {
            console.log('Error');
        } else {
            console.log('Success' + filepath + "created");
        }
    });
  };