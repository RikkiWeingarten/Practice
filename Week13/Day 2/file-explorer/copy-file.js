import fs from 'fs'
const sourcePath = 'source.txt';
const destinationPath = 'destination.txt';

fs.readFile(sourcePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

fs.writeFile(destinationPath, data, (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
      return;
    }

    console.log('Content successfully copied from source.txt to destination.txt');
  });
});
