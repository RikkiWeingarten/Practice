import {fs} from "fs";

const info = fs.readFile("source.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
});

fs.writeFile("destination.txt", info, function(err) {
    if (err) {
        console.log(err);
    }
});