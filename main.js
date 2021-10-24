function setup() {

  canvas = createCanvas(800,500);

}

x = 0;
y = 0;

draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {

  document.getElementById("status").innerHTML = "System is listening, please speak";
  recognition.start();

}

recognition.onresult = function(event){

    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognised as "; + content;

    if(content == "circle") {

      draw_circle = "set";
      x = Math.floor(Math.random()*800);
      y = Math.floor(Math.random()*500);
      document.getElementById("status").innerHTML = "System has started drawing the circle";

    }
  
    if(content =="rectangle" || content =="Rectangle") { 
      x = Math.floor(Math.random() * 900);
      y = Math.floor(Math.random() * 600); 
      document.getElementById("status").innerHTML = "Started drawing rectangle "; 
      draw_rect = "set"; 
    }

}

function draw() {

  if(draw_circle == "set") {

    radius = Math.floor(Math.random()*100);
    circle(x,y,radius);
    draw_circle = "";
    document.getElementById("status").innerHTML = "Circle is drawn";

  }
  
  if(draw_rect == "set") { 
    radius = Math.floor(Math.random() * 100); 
    rect(x,y,70,50); 
    document.getElementById("status").innerHTML = "Rectangle is drawn "; 
    draw_rect = ""; 
  }
}
