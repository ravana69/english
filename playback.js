const sources = [
  "http://stream.zeno.fm/v5c2bw72p48uv", // Ravana English
  "http://titan.shoutca.st:8647/stream", // Theeram Radio
  "http://199.180.72.2:8015/;", // The Jazz Grove Live
  "https://ice55.securenetsystems.net/DASH90", // Dash Hip Hop X
  "https://pureplay.cdnstream1.com/6056_128.mp3?listenerId=esAdblock0287606&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1635389815", // 90's Hit
  "https://pureplay.cdnstream1.com/6040_128.mp3?listenerId=esAdblock0287606&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1635389891", // 90s Alternative Music
  "https://pureplay.cdnstream1.com/6034_128.mp3?listenerId=esAdblock0287606&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1635389943", // Alternative Hitz
  "https://pureplay.cdnstream1.com/6030_128.mp3?listenerId=esAdblock0287606&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1635389983", // Country Hitz
  "https://pureplay.cdnstream1.com/6038_128.mp3?listenerId=esAdblock0287606&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1635390082", // The Mix – 80s 90s & Todays Hitz!
  "https://pureplay.cdnstream1.com/6027_128.mp3?listenerId=esAdblock0105954&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1635390130", // Hot Hitz – Todays Hitz No Rap
  "https://pureplay.cdnstream1.com/6025_128.mp3?listenerId=esAdblock0287606&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1635390200" // Top 40 Hitz
];

const labels = [
  [ "Ravana English", "http://stream.zeno.fm/v5c2bw72p48uv"],
  [ "Theeram Radio", "http://titan.shoutca.st:8647/stream"],
  [ "The Jazz Grove Live", "http://199.180.72.2:8015/;"],
  [ "Dash Hip Hop X", "https://ice55.securenetsystems.net/DASH90"],
  [ "90's Hit", "https://pureplay.cdnstream1.com/6056_128.mp3?listenerId=esAdblock0287606&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1635389815"],
  [ "90s Alternative Music", "https://pureplay.cdnstream1.com/6040_128.mp3?listenerId=esAdblock0287606&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1635389891"],
  [ "Alternative Hitz", "https://pureplay.cdnstream1.com/6034_128.mp3?listenerId=esAdblock0287606&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1635389943"],
  [ "Country Hitz", "https://pureplay.cdnstream1.com/6030_128.mp3?listenerId=esAdblock0287606&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1635389983"],
  [ "The Mix – 80s 90s & Todays Hitz!", "https://pureplay.cdnstream1.com/6038_128.mp3?listenerId=esAdblock0287606&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1635390082"],
  [ "Hot Hitz – Todays Hitz No Rap", "https://pureplay.cdnstream1.com/6027_128.mp3?listenerId=esAdblock0105954&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1635390130"],
  [ "Top 40 Hitz", "https://pureplay.cdnstream1.com/6025_128.mp3?listenerId=esAdblock0287606&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1635390200"]
];

let playingIndex = 0; // current radio
let playing = true; // stream status
let music = null;

setTimeout(function(){
    loadStream(playingIndex);
}, 1);

function loadStream(index){
  if(playing && music !== null)
    destroyStream();

  music = new Audio();
  music.src = sources[index];
  music.load();
  music.play();
  setLabel(index);
  pauseIcon();
  playingIndex = index;
  playing = true;
}

function destroyStream(){
  music.pause();
  music.src = "";
  playIcon();
  playing = false;
}

function changePlayback(){
  if(playing){ destroyStream();  }else{  loadStream(playingIndex);  }
}

function setLabel(index){
  document.getElementById("label").innerHTML = '<h6> <a target="_blank" href="' + labels[index][1] + '">' + labels[index][0] + '</a></h6>';
}

document.onkeydown = function(e) {
  e = e || window.event;
  switch(e.which || e.keyCode) {
    case 32:
      changePlayback();
    break;
  }
};

// icons
function pauseIcon(){
  document.getElementById('playbackButton').className = 'icon fa-pause';
}
function playIcon(){
  document.getElementById('playbackButton').className = 'icon fa-play';
}
