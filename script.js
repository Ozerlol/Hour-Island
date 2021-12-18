    window.onload = refresh; 

      var ppbutton = document.getElementById("audiobutton");
      ppbutton.addEventListener("click", playPause);
      var refreshvar = document.getElementById("refreshbutton");
      refreshvar.addEventListener("click", refresh);

      myVideo = document.getElementById("myAudio");

      
      myVideo.onended = function() {
        var song="son";
        var file=".mp3"
        if (new Date().getHours() >= 21) {
            var destination= "musique/nuit/";
            var image = "images/nuit.jpg";
            document.getElementById("cloudimg").src="images/etoiles.png";
        }
        else if (new Date().getHours() >= 18) {
            var destination= "musique/soir/";
            var image = "images/soir.jpg";
            document.getElementById("cloudimg").src="images/cloud.png";
            
        }
        else if (new Date().getHours() >= 14) {
            var destination= "musique/apres-midi/";
            var image = "images/apres-midi.jpg";
            document.getElementById("cloudimg").src="images/cloud.png";
            var number = Math.floor(Math.random() * 16);
        }
        else if (new Date().getHours() >= 11) {
            var destination= "musique/midi/";
            var image = "images/midi.jpg";
            document.getElementById("cloudimg").src="images/cloud.png";
            var number = Math.floor(Math.random() * 13);
        }
        else if (new Date().getHours() >= 7) {
            var destination= "musique/matin/";
            var image = "images/matin.jpg";
            document.getElementById("cloudimg").src="images/cloud.png";
        }
        else if (new Date().getHours() >= 0) {
            var destination= "musique/nuit/";
            var image = "images/nuit.jpg";
            document.getElementById("cloudimg").src="images/etoiles.png";
        }

        document.getElementById('myAudio').src = destination+song+number+file;
        document.body.style.background = "url("+image+")";
        myVideo.play();
    };

    function anothermusic() {
        myVideo.currentTime=5000;
    }

    function refresh() {
        return anothermusic()
    }

    function playPause() {     
    if (myVideo.paused) {
        myVideo.play();
        ppbutton.innerHTML = "Pause";    
        }
    else  {
        myVideo.pause(); 
        ppbutton.innerHTML = "Play";
        }
} 

      function thisVolume(volume_value)
    {
        var myvideo = document.getElementById("myAudio");
        document.getElementById("vol").innerHTML=volume_value;
        myvideo.volume = volume_value / 100;     
    }

      function getDateTime() {
        var now     = new Date(); 
        var hour    = now.getHours();
        var minute  = now.getMinutes();
        var second  = now.getSeconds(); 
        if(hour.toString().length == 1) {
             hour = '0'+hour;
        }
        if(minute.toString().length == 1) {
             minute = '0'+minute;
        }
        if(second.toString().length == 1) {
             second = '0'+second;
        }   
        var dateTime = hour+':'+minute+':'+second;   
         return dateTime;
    }

    // example usage: realtime clock
    setInterval(function(){
        currentTime = getDateTime();
        document.getElementById("heure").innerHTML = currentTime;
    }, 1000);


