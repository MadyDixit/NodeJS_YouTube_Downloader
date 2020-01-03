var mp3btn = document.getElementById('mp3');
var mp4btn = document.getElementById('mp4');
var urlInput = document.querySelector('.URL-input');
var server = 'http://localhost:4000';

mp3btn.addEventListener('click', () => {
  console.log(`URL: ${urlInput.value}`);
  redirectMp3(urlInput.value);
});

mp4btn.addEventListener('click', () => {
  console.log(`URL: ${urlInput.value}`);
  redirectMp4(urlInput.value);
});

function redirectMp3(query) {
  window.location.href = `${server}/downloadmp3?url=${query}`;
}

function redirectMp4(query) {
  window.location.href = `${server}/downloadmp4?url=${query}`;
}
