const fs = require("fs")
const path = require('path');
fs.mkdir(path.join(__dirname,"/NewPosts"),(err)=>{
    if(err) {
        console.log("Folder Already Exists or Ther is an Error");
    }
    console.log("Folder created")
})