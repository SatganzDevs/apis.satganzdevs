const express = require('express')
const app = express()
const path = require('path');
const axios = require('axios')
const { mycolor } = require('./color')
const apiRouter = require('./templates/api');

// Bagian penting
app.use(express.static('templates'))
// End


// Render Html File
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});



// Penting
app.use('/api', apiRouter);



//penting
app.get('/about', async (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/about.html'));
})



app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'templates/404.html'));
});


const port = 3000
app.listen(port, () => {
console.log(mycolor("connected to server!"))
})