const fs = require("fs")
const path = require('path');



fs.readFile(path.join(__dirname,'posts','blogpost.txt'),'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(`File content: ${data}`)
})