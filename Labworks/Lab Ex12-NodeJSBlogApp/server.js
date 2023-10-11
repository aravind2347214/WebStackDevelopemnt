const fs = require("fs")
const path = require('path');

fs.writeFile(path.join(__dirname,'posts','blogpost.txt'),"First Post",(err)=>{
    if (err) throw err;
    console.log('file created')

})

fs.readFile(path.join(__dirname,'posts','blogpost.txt'),'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(`File content: ${data}`)
})