const express = require('express');
const router = express.Router();
const axios = require('axios');
const { pindl } = require('./scraper.js')
const _APIKEY = ['SatganzDevs','SatriaGanteng','SatriaHandsome'];
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]};





// API PART
router.get('/randomquote/muslim', async (req, res) => {
const apikeyInput = req.query.apikey;
if (!apikeyInput || !_APIKEY.includes(apikeyInput)) {
return res.json({ status: false, message: 'Invalid API key' });
}
try {
const response = await axios.get('https://raw.githubusercontent.com/SatganzDevs/DataApi/main/random/quotesislam.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'SatganzDevs'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
});


router.get('/random/asmaulhusna', async (req, res) => {
const apikeyInput = req.query.apikey;
if (!apikeyInput || !_APIKEY.includes(apikeyInput)) {
return res.json({ status: false, message: 'Invalid API key' });
}
res.json({
status: true,
url: "https://cldup.com/-KX1uk5DAo.mp3",
author: 'SatganzDevs' });
});


router.get('/randomquote', async (req, res) => {
const apikeyInput = req.query.apikey;
if (!apikeyInput || !_APIKEY.includes(apikeyInput)) {
return res.json({ status: false, message: 'Invalid API key' });
}
try {
const response = await axios.get('https://raw.githubusercontent.com/SatganzDevs/DataApi/main/random/quotes.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({ 
status: true,
quote: randomQuote,
author: 'SatganzDevs' });
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
});


router.get('/wallpaper/programming', async (req, res) => {
const apikeyInput = req.query.apikey;
if (!apikeyInput || !_APIKEY.includes(apikeyInput)) {
return res.json({ status: false, message: 'Invalid API key' });
}
try {
const response = ["https://i.ibb.co/MNJVCQF/Programmer-aesthetics-Bilgisayar-m-hendisli-i-Bilgisayar-programlama-M-hendislik.jpg",
"https://i.ibb.co/pQDWs9G/Coding-wallpaper.jpg",
"https://i.ibb.co/cDMW3Cp/Dark-Mountains-1800x3200-Amoledbackgrounds-Hi.jpg",
"https://i.ibb.co/1r6JBsy/Code-Ringtones-And-Wallpapers-Free-By-Zedge-1.jpg",
"https://i.ibb.co/J2268xS/Code-Ringtones-And-Wallpapers-Free-By-Zedge.jpg",
"https://i.ibb.co/bgqtQF5/Programming.jpg",
"https://i.ibb.co/5jY4v6K/Pin-by-lily-on-lit-Dark-verse-Wallpaper-ponsel-Wallpaper-minimalis-Wallpaper-ponsel-minion.jpg",
"https://i.ibb.co/FJr1cpx/c8757ba1-7933-44bb-83f5-5593cae2d395.jpg",
"https://i.ibb.co/59t3r0K/System-exit-0.jpg",
"https://i.ibb.co/8dXw10P/Programming-Humor.jpg",
"https://i.ibb.co/rphLCDD/Top-Five-Mistakes-I-Made-While-Learning-to-Code-in-School.jpg",
"https://i.ibb.co/khJXr6c/Programmer-Blank-Poster.jpg",
"https://i.ibb.co/q569wgN/I-Love-You-Code-IPhone-Wallpapers.jpg",
"https://i.ibb.co/BzSPYd9/Download-programmer-wallpaper-by-Devil-Wine-15.jpg",
"https://i.ibb.co/JKS2BzT/Coding-wallpaper-by-Sajas823-Download-on-ZEDGE-eacb.jpg",
"https://i.ibb.co/mFdF8RZ/34a5e780-6c7d-48e4-9176-9db9eb4e7e8b.jpg",
"https://i.ibb.co/vhqf5hK/34acfa45-2ebe-4574-9402-a4098ea9a759.jpg",
"https://i.ibb.co/8zHfrXy/4beaa71a-c70c-4ef5-a56a-ffdef471de14.jpg",
"https://i.ibb.co/yXtTyX4/ab1669ab-d843-4bb3-8a44-cb9da3bf15b4.jpg",
"https://i.ibb.co/PCDYZLD/Programmer-Life.jpg",
"https://i.ibb.co/kBk5F6w/Black-coders-wallpaper-programmer.jpg",
"https://i.ibb.co/KxRhVFw/Coding.jpg",
"https://i.ibb.co/jL6QFXC/Qual-a-sua-linguagem-de-programa-o-favorita.jpg"]
res.json({
status: true,
url: pickRandom(response),
author: 'SatganzDevs'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
});

router.get('/wallpaper/pegunungan', async (req, res) =>{
const apikeyInput = req.query.apikey;
if (!apikeyInput || !_APIKEY.includes(apikeyInput)) {
return res.json({ status: false, message: 'Invalid API key' });
}
res.json({
status: 200,
creator: 'SatganzDevs',
url: pickRandom(["https://i.ibb.co/Bz7HY7w/3c1ba929-ce8a-4934-89b9-cf6c2e2dde46.jpg",
"https://i.ibb.co/N3p49GD/velaris.jpg",
"https://i.ibb.co/fnNC42v/9cb4ef3d-3258-41e0-ab1b-404fca35c464.jpg",
"https://i.ibb.co/BB7mPZ9/DSC-2218-Mystia-River-Banff-National-Park-Alberta-Canada.jpg",
"https://i.ibb.co/9nWJpJX/2f3a27b8-d22a-426a-b58f-f75cb7fef6ef.jpg",
"https://i.ibb.co/dgxKDn6/15fd7dc5-5a9d-4d3b-a506-4d5c351703f6.jpg",
"https://i.ibb.co/93bh7D1/5c028309-3362-40ea-9b59-07161758ae7b.jpg",
"https://i.ibb.co/wS4YcLF/Marhaban-Ya-Ramadhan-MOHON-MAAF-LAHIR-DAN-BATIN.jpg",
"https://i.ibb.co/9yN8WLL/Serene-afternoon-marking-the-end-of-Kheerganga-trek-Kasol-OC-2000-x-4000.jpg",
"https://i.ibb.co/hLnXShk/ee4f0524-12e9-4077-a91d-c28be7e1d5b3.jpg",
"https://i.ibb.co/X3ZwcYH/b10a76e1-5fa4-4c31-8d81-7213d1dd43d5.jpg",
"https://i.ibb.co/rvX8wNh/most-beautiful-country-in-the-world-most-beautiful-places-in-the-us-most-beautiful-places-in-europe.jpg",
"https://i.ibb.co/swQWYvW/aecf1dca-e515-4cd7-9e08-e5acbe4f83d2.jpg",
"https://i.ibb.co/BqzMBdH/Traveling-Cook-Places-and-Moments-of-Dreams.jpg",
"https://i.ibb.co/NKm5zkL/Best-Beginner-Hikes-in-Washington-State.jpg",
"https://i.ibb.co/j6SyP1R/Premium-Photo-Layered-high-mountain-landscape-theme-black-and-white-landscape-painted-with-watercolo.jpg",
"https://i.ibb.co/ZxnsFR2/e071a93e-fd03-4b03-a6cb-c1f8a5cc7275.jpg",
"https://i.ibb.co/09R3Px2/604c5744-8b7e-4d29-b335-c46ab413d52f.jpg",
"https://i.ibb.co/c2GYqdx/2f702c0f-b03d-45b7-b556-266854636b11.jpg",
"https://i.ibb.co/qCKjnJy/9ea5ba6f-2b1b-431c-b497-0b45754dc012.jpg",
"https://i.ibb.co/V26fy9f/Just-Captivating-By-Hannes-Becker.jpg",
"https://i.ibb.co/rwtmSQj/Hadi-Budak-Bersayap-Hitam-Completed.jpg",
"https://i.ibb.co/Ry5Zbhr/Register-Login.png"])
})
})

module.exports = router;