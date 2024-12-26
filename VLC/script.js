const speedup = document.querySelector("#speedup");
const speeddown = document.querySelector("#speeddown");
const volumeup = document.querySelector("#volumeup");
const volumedown = document.querySelector("#volumedown");

const openbtn = document.querySelector("#openbtn");
const videobtn = document.querySelector("#videobtn");

const main = document.querySelector("#main");

const speeduphandler = function(){
    const videoele = document.querySelector("video");
    if(videoele){
        videoele.playbackRate = Math.min(videoele.playbackRate + 0.5, 3);
    }
}

const speeddownhandler = function(){
    const videoele = document.querySelector("video");
    if(videoele){
        videoele.playbackRate = Math.max(videoele.playbackRate - 0.5, -2); 
    }
}

const volumeuphandler = function(){
    const videoele = document.querySelector("video");
    if(videoele){
        if(videoele.volume < 1){
            videoele.volume = videoele.volume + 0.1; 
        }
        else{
            videoele.volume = 1;
        }
    }
}

const volumedownhandler = function(){
    const videoele = document.querySelector("video");
    if(videoele){
        if(videoele.volume > 0){
        videoele.volume = videoele.volume - 0.1; 
        }
        else{
            videoele.volume = 0;
        }
    }

}

const inputhandler = function(){
    videobtn.click();
}

const acceptInputHandler = function(obj){
    const selectedFile = obj.target.files[0];
    // have to convert video to base64
    const link = URL.createObjectURL(selectedFile);
    const videoele = document.createElement("video");
    videoele.src = link;
    videoele.setAttribute("class","video");
    videoele.play();
    videoele.controls="true";
    videoele.volume = 0.7;
    main.appendChild(videoele);
}

speedup.addEventListener("click", speeduphandler);
speeddown.addEventListener("click", speeddownhandler);
volumeup.addEventListener("click", volumeuphandler);
volumedown.addEventListener("click", volumedownhandler);

openbtn.addEventListener("click", inputhandler);
videobtn.addEventListener("change", acceptInputHandler);