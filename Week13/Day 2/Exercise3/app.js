import {readFile, writeFile} from './fileManager.js'

(async () => {
    const fileToRead = './Hello World.txt'; 
    const fileToWrite = './Bye World.txt'; 
  
    try {

      const content = await readFile(fileToRead);
      console.log('File content:', content);
  
      const message = await writeFile(fileToWrite, 'Writing to the file');
      console.log(message); // Outputs: "File written successfully"
    } catch (error) {
      console.error(error);
    }
  })();