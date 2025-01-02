const fs = require('fs');

const filePath = './file-data.txt';

function readFile() {
    fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log(data);
  }
})
};

module.exports = readFile;
