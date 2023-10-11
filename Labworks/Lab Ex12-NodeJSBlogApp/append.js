const fs = require("fs")
const path = require('path');

fs.appendFile(path.join(__dirname,"posts",'blogpost.txt'),"Fourth post",(err)=>{
    if (err) throw err;
})