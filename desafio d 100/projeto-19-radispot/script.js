 const songName = document.getElementById('song-name');
 const bandName = document.getElementById('band-name');
 const song = document.getElementById('audio');
 const cover = document.getElementById('cover');
 const play = document.getElementById('play');
 const next = document.getElementById('next');
 const previous = document.getElementById('previous');



 const Possibility = {
   songName : 'Possibility', 
   artist : 'Lykke Li',
   file : 'Possibility'
 }

 const Darkparadise = {
   songName : 'Darkparadise', 
   artist : 'Lana Del Rey',
   file : 'Darkparadise'
 }

const GivenUp = {
      songName : 'Given\Up', 
      artist : 'Linkin Park',
      file : 'GivenUp'
}


 let isPlaying = false;
 const playlist = [Possibility, Darkparadise, GivenUp];
 let index = 0;

 function playSong(){
   play.querySelector('.bi').classList.remove('bi-play-circle-fill');
   play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
 }

 function pauseSong(){
   play.querySelector('.bi').classList.add('bi-play-circle-fill');
   play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
 }

 function playPauseDecider(){
   if(isPlaying === true) {
      pauseSong();
   }
   else {
      playSong();
   }
 }

 function initializeSong(){
   cover.src = `imagens/${playlist[index].file}.jpg`;
   song.src = `sons/${playlist[index].file}.m4a`;
   songName.innerText = playlist[index].songName;
   bandName.innerText = playlist[index].artist;
 }

 function previousSong(){
   if(index === 0){
      index = playlist.length - 1;
   }
   else {
      index -= 1;
   }
   initializeSong();
   playSong();
   
 }

 
 function nextSong(){
   if(index === playlist.length - 1){
      index =  0;
   }
   else {
      index += 1;
   }
   initializeSong();
   playSong();
   
 }

 function updateProgressBar(){
   
 }

 initializeSong();

 play.addEventListener('click', playPauseDecider);
 previous.addEventListener('click', previousSong);
 next.addEventListener('click', nextSong)
 song.addEventListener('timeupdate', updateProgressBar);