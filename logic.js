kolTab = 0;
kolTab2 = 0;
const music = document.getElementById('music1');
const music2 = document.getElementById('music2');
const prog = document.getElementById('progressplayer');
const prog2 = document.getElementById('progressplayer2');
const btn = document.getElementById("toggledrun");
const drun = document.querySelector(".drun");
function playMusic(){
            if(kolTab == 1){
                        music.pause();
                        kolTab = 0;
            }else{
                        music.play();
                        kolTab = 1;               
            }
}

function playMusic2(){
            if(kolTab2 == 1){
                        music2.pause();
                        kolTab2 = 0;
            }else{
                        music2.play();
                        kolTab2 = 1;              
            }
}

music.addEventListener('timeupdate', () => {
    prog.style.width = music.currentTime/music.duration*100 + '%';
});

music2.addEventListener('timeupdate', () => {
    prog2.style.width = music2.currentTime/music2.duration*100 + '%';
});

btn.addEventListener('click', () => {
            drun.classList.toggle('active');
                setTimeout(() => {
            drun.classList.remove("active");
            }, 6800);
});