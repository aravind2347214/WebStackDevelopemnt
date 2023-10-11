const fs = require("fs")
const path = require('path');

fs.unlink(path.join(__dirname,"posts","blogpost.txt"),(err)=>{
    if (err) throw err;
    console.log("File deleted successfully!");
})