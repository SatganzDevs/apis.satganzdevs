const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const axios = require('axios')
app.use(express.static('templates'))
const pickRandom = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)];
    };
// Render Html File
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});

app.get('/api/randomquote/muslim', async (req, res) => {
    const apikeyInput = req.query.apikey;

    if (!apikeyInput || apikeyInput !== 'zahirgans') {
        return res.json({ status: false, message: 'Invalid API key' });
    }

    try {
        const response = await axios.get('https://raw.githubusercontent.com/SatganzDevs/DataApi/main/random/quotesislam.json');
      console.log(response.data)
            const randomQuote = await pickRandom(response.data);
            res.json({ status: true, quote: randomQuote, author: 'SatganzDevs' });
    } catch (error) {
        console.error(error);
        res.json({ status: false, message: 'An error occurred' });
    }
});
app.get('/api/random/asmaulhusna', async (req, res) => {
    const apikeyInput = req.query.apikey;

    if (!apikeyInput || apikeyInput !== 'zahirgans') {
        return res.json({ status: false, message: 'Invalid API key' });
    }
    res.json({ status: true, url: "https://cldup.com/-KX1uk5DAo.mp3", author: 'SatganzDevs' });
});

app.get('/api/randomquote', async (req, res) => {
    const apikeyInput = req.query.apikey;

    if (!apikeyInput || apikeyInput !== 'zahirgans') {
        return res.json({ status: false, message: 'Invalid API key' });
    }

    try {
        const response = await axios.get('https://raw.githubusercontent.com/SatganzDevs/DataApi/main/random/quotes.json');
      console.log(response.data)
            const randomQuote = await pickRandom(response.data);
            res.json({ status: true, quote: randomQuote, author: 'SatganzDevs' });
    } catch (error) {
        console.error(error);
        res.json({ status: false, message: 'An error occurred' });
    }
});




app.listen(port, () => {
  // Code.....
})