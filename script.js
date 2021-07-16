var audio = document.createElement('audio');
audio.setAttribute('src', './files/sound.mp3');
audio.setAttribute('autoplay', 'autoplay');
// var audio = new Audio('files/sound.mp3');
audio.loop = true;  
audio.play();