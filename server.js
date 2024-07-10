const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(express.static(path.join(__dirname,'build')));
app.get('/*', function(req,res){
  res.sendFile(path.join(__dirname, 'build' ,'index.html'))
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
  });
  