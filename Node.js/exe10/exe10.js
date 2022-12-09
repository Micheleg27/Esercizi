const fs = require("fs");

let data = 'This is a text file';

fs.writeFile('file-1.txt', { encoding: 'utf-8'}, data, (err) => {
    if(err){
        console.error(err);
        return;
    }
    else{
        console.log(data)
    }
} )
