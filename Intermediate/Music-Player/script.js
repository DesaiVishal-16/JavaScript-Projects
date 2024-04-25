const musicplayer = document.getElementsByClassName("music-player")
const playlists = document.getElementsByClassName("playlists-songs")


const allsongs = [
    {
        id:1,
        songName:"Can't Stop Me. Can't Even Slow Me Down.",
        artist:"Quincy Larson",
        songImg:{
           src:"./images/id.jpg"
        },
        src:"",
        duration:"3:52"
    },
    {
        id:2,
        songName:"",
        artist:"",
        songImg:"",
        src:"",
        duration:"12sec"
    },
    {
        id:3,
        songName:"", 
        artist:"",
        songImg:"",
        src:"",
        duration:"12sec"
    },
    {
        id:4,
        songName:"",
        artist:"",
        songImg:"",
        src:"",
        duration:"12sec"
    },
    {
        id:5,
        songName:"",
        artist:"",
        songImg:"",
        src:"",
        duration:"12sec"
    }
    

]


const userData=()=>{
const songs = [...allsongs]
currentSong = null;
songCurrentTime=0;
}



const playSong =(id)=>{
const song =  userData?.songs.find(song=>song.id===id)
audio.src=song.src;
audio.songImg=song.songImg.src
audio.songName=song.songName
audio.artist=song.artist
audio.duration=song.duration

if(userData?.currentSong===null || userData?.currentSong.id!=song.id){
  audio.currentTime=0;
}else{
    audio.currentTime=userData?.songCurrentTime
}




}


const audio = document.createElement("audio")
audio.controls=true;
const source = document.createElement("source")


source.src="https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stop-me-cant-even-slow-me-down.mp3"
audio.append(source)
musicplayer[0].append(audio)




const musicImg = document.getElementsByClassName("music-Img")

const img = document.createElement("img")

musicImg[0].append(img)
img.src="./images/id1.jpg"
img.style.height="200px"