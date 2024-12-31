const speedup = document.querySelector("#speedup");
const speeddown = document.querySelector("#speeddown");
const volumeup = document.querySelector("#volumeup");
const volumedown = document.querySelector("#volumedown");
const tost = document.querySelector(".tost");

const openbtn = document.querySelector("#openbtn");
const videobtn = document.querySelector("#videobtn");

const main = document.querySelector("#main");

const videoele = document.querySelector("video");

const isVideo = function(){
    const videoele = document.querySelector("video");
    if(videoele){
        return videoele;
    }
    else{
        false;
    }
}
const speeduphandler = function(){
    const videoele = document.querySelector("video");
    if(videoele){
        videoele.playbackRate = Math.min(videoele.playbackRate + 0.5, 3);
        tost.textContent = videoele.playbackRate + "X";
        tost.style.display = "block";

        setTimeout( function(){
            tost.style.display = "none";
        }, 2000)
    }
}

const speeddownhandler = function(){
    const videoele = document.querySelector("video");
    if(videoele){
        videoele.playbackRate = Math.max(videoele.playbackRate - 0.5, 0); 
        tost.textContent = videoele.playbackRate + "X";
        tost.style.display = "block";

        setTimeout( function(){
            tost.style.display = "none";
        }, 2000)
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
        tost.textContent = Math.round(videoele.volume*100) + "%";
        tost.style.display = "block";

        setTimeout( function(){
            tost.style.display = "none";
        }, 2000)
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
        tost.textContent = Math.round(videoele.volume*100) + "%";
        tost.style.display = "block";

        setTimeout( function(){
            tost.style.display = "none";
        }, 2000)
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
    // videoele.play();
    // videoele.controls="true";
    videoele.volume = 0.7;
    main.appendChild(videoele);
}

speedup.addEventListener("click", speeduphandler);
speeddown.addEventListener("click", speeddownhandler);
volumeup.addEventListener("click", volumeuphandler);
volumedown.addEventListener("click", volumedownhandler);

openbtn.addEventListener("click", inputhandler);

// jase he input me kuch upload hoga it will chnage
videobtn.addEventListener("change", acceptInputHandler);


/************************controls***********************/ 
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const fullscreen = document.querySelector(".fullscreen");
const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");
const restart = document.querySelector("#restart");

fullscreen.addEventListener("click", function(){
    const videoele = document.querySelector("video");
    if(videoele){
        main.requestFullscreen();
        // videoele.controls = "true";
    }
})



play.addEventListener("click", function(){
    const videoele = document.querySelector("video");
    if(videoele && videoele.paused){
        videoele.play();
        play.style.display = "none";
        pause.style.display = "inline";
    }
})

pause.addEventListener("click", function(){
    const videoele = document.querySelector("video");
    if(videoele && !videoele.paused){
        videoele.pause();
        play.style.display = "inline";
        pause.style.display = "none";
    }
})

forward.addEventListener('click', () => {
    const videoele = document.querySelector("video");
    // Increase the current time by 10 seconds
    if(videoele){
        videoele.currentTime += 10;
    }
    // Optional: You can ensure the video doesn't go beyond its duration
    if (videoele.currentTime > videoele.duration) {
        videoele.currentTime = videoele.duration;
    }
});

backward.addEventListener('click', () => {
    const videoele = document.querySelector("video");
    if(videoele){
        videoele.currentTime -= 10;
    }
    if (videoele.currentTime < 0) {
        videoele.currentTime = 0;
    }
});

restart.addEventListener("click", function(){
    const videoele = document.querySelector("video");
    
    if(videoele){
        videoele.currentTime = 0;
    }
})



/*******seek bar********/ 
const video = document.querySelector("video");
const seekbar = document.querySelector("#seekbar");
const currentTimeDisplay = document.querySelector("#currentTime");
const durationDisplay = document.querySelector("duration");

// Update the seekbar as the video plays
video.addEventListener('timeupdate', function() {
    const currentTime = video.currentTime;
    const duration = video.duration;

    // Update the seekbar value
    seekbar.value = (currentTime / duration) * 100;

    // Update the current time display
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    currentTimeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    // Update the duration display
    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60);
    durationDisplay.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;
});

// Seek to the new time when the user changes the seekbar
seekbar.addEventListener('input', function() {
    const newTime = (seekbar.value / 100) * video.duration;
    video.currentTime = newTime;
});