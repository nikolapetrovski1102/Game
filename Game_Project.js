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
$("img").hide();
$(".winner").hide();

var guess1 = "";
var guess2 = "";
var count = 0;
var points = 0;

$("li").click(function() {
  if ((count < 2) &&  ($(this).children("img").hasClass("face-up")) === false) {
    
    count++;
    $(this).children("img").show();
    $(this).children("img").addClass("face-up");
    
    if (count === 1 ) { 
      guess1 = $(this).children("img").attr("src"); 
    }   
    
    else { 
      guess2 = $(this).children("img").attr("src"); 
      
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
            $("img").not(".match").hide();
            $("img").not(".match").removeClass("face-up");
        }, 1000);
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
