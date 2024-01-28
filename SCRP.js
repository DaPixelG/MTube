let playing = false;
function search(){
    let value = document.getElementById('SB').value;
    if(value.match(/^ *$/) === null){
        window.location.href = '/s?q='+value;
    }
}
let vid = document.getElementById('VD');
vid.play();
if(text == 'play'){
    play();
}
function play(){
    let button = document.getElementById('play');
    playing = !playing;
    if(playing){
        button.textContent = '▶️';
        vid.pause();
    }else{
        button.textContent = '..'
        vid.play();
    }
}
function skip(sec){
    vid.currentTime += sec;
}


