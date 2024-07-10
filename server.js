const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(express.static(path.join(__dirname,'build')));
// new comment !!!
app.get('/*', function(req,res){
  res.sendFile(path.join(__dirname, 'build' ,'index.html'))
})

//i'm a comment! , you should pull me
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
  });
  
//here alreem
