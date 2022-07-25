//create, delete, update, rename, these file operations
var files = require('fs');

// files.writeFile('myfile.txt',"Hi this is from node", 
// function(error){
//     if(error) throw error;
//     console.log('File created');
// })

files.writeFile('newFile.txt',"Hi this is from node", 
function(error){
    if(error) throw error;
    console.log('File created');
})

files.appendFile('myfile.txt',"\n Hi from Node", 
function(error){
    if(error) throw error;
    console.log('File appended');
})

files.readFile('myfile.txt', 'utf-8',
function(error,data){
    if(error) throw error;
    console.log(data)
}
)

files.rename('myfile.txt','myDoc.txt',
function(error){
    if(error) throw error;
    console.log('file renamed')
}
)

//to delete file
files.unlink('newFile.txt',
(error)=>{
    if(error) throw error;
    console.log('file deleted')
}
)