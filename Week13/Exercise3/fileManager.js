import fs from 'fs'

export function readFile(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(`Error reading file: ${err.message}`);
        } else {
          resolve(data);
        }
      });
    });
  }
  
export function writeFile(filePath, content) {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
          reject(`Error writing to file: ${err.message}`);
        } else {
          resolve('File written successfully');
        }
      });
    });
  }

