var images = [
        'images/Untitled.png',
        'images/Mouse.png',
        'images/Camera.png',
        'images/Monitor.png',
        'images/Mic.png',
        'images/Printer.png',
        'images/Projector.png',
        'images/scanner.png',
        'images/Untitled.png',
        'images/Mouse.png',
        'images/Camera.png',
        'images/Monitor.png',
        'images/Mic.png',
        'images/Printer.png',
        'images/Projector.png',
        'images/scanner.png',
];

console.log(window.innerWidth);

for (var i = 0; i < 8; i++) { 
  var rand = Math.floor(Math.random() * (1200 - 900 + 1) + 900); 
}
randomizeImages();

var output = "<ol>";
for (var i = 0; i < 16; i++) { 
  output += "<li>";
  output += "<img src = '" + images[i] + "'/>";
  output += "</li>";
}


output += "</ol>";
document.getElementById("container").innerHTML = output;

$(".winner").hide();

$(window).on('load', function() {
  setTimeout(() => {
      $("img").fadeOut("slow");
      console.log("Hide");
  }, 2500);
 });

var guess1 = "";
var guess2 = "";
var count = 0;
var points = 0;


$("li").click(function() {
  if ((count < 2) &&  ($(this).children("img").hasClass("face-up")) === false) {

    count++;
    $(this).children("img").fadeIn("fast");
    $(this).children("img").addClass("face-up");
    
    if (count === 1 ) { 
      guess1 = $(this).children("img").attr("src"); 
    }   
    
    else { 
      guess2 = $(this).children("img").attr("src"); 

      $("li").addClass("not-clickable");
      setTimeout(function(){
            $("li").removeClass("not-clickable");
       },600);
      
      if (guess1 === guess2) { 
        console.log("match");
        $("li").children("img[src='" + guess2 + "']").addClass("match");
        points += 2;
        document.getElementById("points").innerHTML = "Points: " + points;
        console.log(points);
    }
    
    else { 
        console.log("miss");
        setTimeout(function() {
            $("img").not(".match").fadeOut("slow");
            $("img").not(".match").removeClass("face-up");
        }, 700);
        points--;
        if (points < 0){
            points++;
        }
        document.getElementById("points").innerHTML = "Points: " + points;
        console.log(points);
      }
      
      count = 0; 
      setTimeout(function() {
         console.clear(); 
        }, 60000);      
    }
  }

    let image_class = document.querySelectorAll("img");

        image_class = Array.from(image_class);

        if (points > 5 && image_class.every((img) => img.classList.contains("match"))){
          console.log("Pobedi!");
          document.getElementById("final").innerHTML = "You scored " + points + " points";
          $(".winner").slideDown("slow");
          $("#container").addClass('blur');
          Confetti();
        }
      });
      
      function randomizeImages(){
        Array.prototype.randomize = function()
        {
          var i = this.length, j, temp;
          while ( --i )
          {
            j = Math.floor( Math.random() * (i - 1) );
            temp = this[i];
            this[i] = this[j];
            this[j] = temp;
          }
        };
        
        images.randomize();
      }

      function Confetti (){
        canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 2;
cy = ctx.canvas.height / 2;

let confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
{ front: 'red', back: 'darkred' },
{ front: 'green', back: 'darkgreen' },
{ front: 'blue', back: 'darkblue' },
{ front: 'yellow', back: 'darkyellow' },
{ front: 'orange', back: 'darkorange' },
{ front: 'pink', back: 'darkpink' },
{ front: 'purple', back: 'darkpurple' },
{ front: 'turquoise', back: 'darkturquoise' }];


//-----------Functions--------------
resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cx = ctx.canvas.width / 2;
  cy = ctx.canvas.height / 2;
};

randomRange = (min, max) => Math.random() * (max - min) + min;

initConfetti = () => {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(10, 20),
        y: randomRange(10, 30) },

      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1 },

      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1 },

      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50) } });


  }
};

//---------Render-----------
render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = confetto.dimensions.x * confetto.scale.x;
    let height = confetto.dimensions.y * confetto.scale.y;

    // Move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    // Apply forces to velocity
    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    // Set position
    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;

    // Delete confetti when out of frame
    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

    // Loop confetto x position
    if (confetto.position.x > canvas.width) confetto.position.x = 0;
    if (confetto.position.x < 0) confetto.position.x = canvas.width;

    // Spin confetto by scaling y
    confetto.scale.y = Math.cos(confetto.position.y * 0.1);
    ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

    // Draw confetti
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });

  // Fire off another round of confetti
  if (confetti.length <= 10) initConfetti();

  window.requestAnimationFrame(render);
};

//---------Execution--------
initConfetti();
render();

//----------Resize----------
window.addEventListener('resize', function () {
  resizeCanvas();
});

//------------Click------------
window.addEventListener('click', function () {
  initConfetti();
});
      }