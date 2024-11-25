const musicContainter = document.getElementById("music-container")
const musicInfo = document.getElementById("music-info")
const title = document.getElementById("title")
const progressContainer = document.getElementById("progress-container")
const progressBar = document.getElementById("progress")
const play = document.getElementById("play-button")
const audio = document.getElementById("audio")
const iconPlay = document.getElementById("iconPlay")
const musicImg = document.getElementById("cover")
const forward = document.getElementById("forward-button")
const backward = document.getElementById("backward-button")
const playLists = document.getElementsByClassName("songs-lists")



const songs = ["Faded","Perfect","A Year Ago","100 D","A Dusty Road","A Ghost Town"]


let songIndex = 0;

loadSong(songs[songIndex])

function loadSong(song){
    title.innerText=song
    audio.src=`./music/${song}.mp3`
    musicImg.src=`./images/artists-img/${song}.jpg`
}


let isPlaying=false

play.addEventListener("click",()=>{
    if(!isPlaying){
     playMusic()
    }else{
        pauseMusic()
    }
})

const playMusic = () => {
    audio.play().then(()=>{
        isPlaying=true
        iconPlay.innerHTML="&#10074;&#10074;"
        musicContainter.classList.add("play")
    })
    .catch(error=>console.error(error))
}
  
const pauseMusic=()=>{
    audio.pause()
        isPlaying=false
        iconPlay.innerHTML="&#9654;"
        musicContainter.classList.remove("play")
}

const prevSong=()=>{
    songIndex--
    if(songIndex<0){
        songIndex = songs.length -1
    }
    loadSong(songs[songIndex])
    playMusic()
}

const nextSong=()=>{
    songIndex++
    if(songIndex>songs.length-1){
        songIndex = 0
    }
    loadSong(songs[songIndex])
    playMusic()
}

const updateProgress = (e) =>{
    const { duration, currentTime } = e.srcElement;
    if (isFinite(duration)) { 
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }
}

const setProgress = (e)=> {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    if (isFinite(duration)) { 
        audio.currentTime = (clickX / width) * duration;
    }
}

backward.addEventListener("click",prevSong)

forward.addEventListener("click",nextSong)

audio.addEventListener("timeupdate",updateProgress)
audio.addEventListener("ended",nextSong)

progressContainer.addEventListener("click",setProgress)


for (let i = 0; i < playLists.length; i++) {
    playLists[i].addEventListener("click", () => {
        const selectedSong = songs[i];
        loadSong(selectedSong);
        playMusic();
    });
}





















const likeButtons = document.querySelectorAll(".songs-lists button");

likeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.color = "red";
    });
});






