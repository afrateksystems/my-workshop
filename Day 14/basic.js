const fs = require('fs');
fs.readFile('data.txt','utf8',(err,data) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});
fs.writeFile('data.txt','i am writing',(err) =>{
    if(err) console.error(err);
    else console.log('file written');
});
fs.appendFile('data.txt',' and i am continuing it',(err) =>{
    if(err) console.error(err);
});