const express = require('express')

const app = express()

const path = require('path')



app.get('/', function (req, res){
    let file = path.resolve('index.html')
    res.sendFile(file)
});


app.get('*', function (req, res){
    if (req.url.endsWith('.css')){
        let file = path.resolve('styles' + req.url)
        return res.sendFile(file)
    }


let images = ['jpg', 'jpeg', 'png', 'bmp', 'svg'];
let ext = req.url.split('.')[1];

if (images.includes(ext)){
    let file = path.resolve('./' + req.url);
    return res.sendFile(file);
}; 
    res.send("Not Found");

});

app.listen(4000, () => {
    console.log("servidor corriendo");
});
