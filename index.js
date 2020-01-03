const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.listen(port, () => {
  console.log('Server Works');
});
app.use(express.static('public'))

app.get('/downloadmp3', (req, res) => {
  var url = req.query.url;
  res.header('Content-Disposition', 'attachment; filename="audio.mp3"');
  ytdl(url, {
    format: 'mp3',
    filter: 'audioonly'
  }).pipe(res);
});

app.get('/downloadmp4', (req, res) => {
  var url = req.query.url;
  res.header('Content-Disposition', 'attachment; filename="video.mp4"');
  ytdl(url, {
    format: 'mp4'
  }).pipe(res);
});
