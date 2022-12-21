document.getElementById('sure-btn').addEventListener("click", function(){
    
    document.getElementById('msg').innerText = "I LOVE YOU VERY MUCH. 💘";
    document.getElementById("bg-img").style.backgroundImage = "url(pic1.jpg)";
    document.getElementById('msg').style.color = "#FFFFFF";
    document.getElementById("msg").style.lineHeight = "30px";
    document.getElementById("yes-btn").style.display = "none";
    document.getElementById("sure-btn").style.display = "none";   
})


document.getElementById('yes-btn').addEventListener("click", function(){
    document.getElementById('msg').innerText = "I LOVE YOU. 💘";
    document.getElementById('msg').style.color = "rgb(255, 255, 255)";
    document.getElementById("msg").style.lineHeight = "30px";
    document.getElementById("bg-img").style.backgroundImage = "url(pic2.webp)";
    document.getElementById("yes-btn").style.display = "none";
    document.getElementById("sure-btn").style.display = "none";
})



// add music in first button 
var x = document.getElementById("myAudio"); 
function myAudio() { 
  x.play(); 
  y.pause();
  x.style.display = "none";
  y.style.display = "none";

}


// add music in second button 
var y = document.getElementById("myAudioSecond"); 
function myAudioSecond() { 
  y.play(); 
  x.pause();
}



