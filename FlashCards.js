$("div").flip({
    speed: 600, 
});

var w = window.innerWidth;

$(".winner").hide();

console.log(w);

function Move(){
    if(w == 375 || w == 360 || w == 412 || w == 393 || w == 414){
        $(".one").animate({"margin-left" : "70%"}, 600)
    }
    else{
        $(".one").animate({"margin-left" : "190%"}, 600)
    }
    $(".one").css("z-index", "111")
}
function Move1(){
    if(w == 375 || w == 360 || w == 412 || w == 393 || w == 414){
        $(".two").animate({"margin-left" : "70%"}, 600)
    }
    else{
        $(".two").animate({"margin-left" : "188.5%"}, 600)
    }
    $(".two").css("z-index", "222")
}
function Move2(){
    if(w == 375 || w == 360 || w == 412 || w == 393 || w == 414){
        $(".three").animate({"margin-left" : "70%"}, 600)
    }
    else{
        $(".three").animate({"margin-left" : "186.5%"}, 600)
    }
    $(".three").css("z-index", "333")
}
function Move3(){
    if(w == 375 || w == 360 || w == 412 || w == 393 || w == 414){
        $(".four").animate({"margin-left" : "70%"}, 600)
    }
    else{
        $(".four").animate({"margin-left" : "184.9%"}, 600)
    }
        $(".four").css("z-index", "444")
}
function Move4(){
    if(w == 375 || w == 360 || w == 412 || w == 393 || w == 414){
        $(".fifth").animate({"margin-left" : "70%"}, 600)
    }
    else{
        $(".fifth").animate({"margin-left" : "182.9%"}, 600)
    }
        $(".fifth").css("z-index", "555")
}
function Move5(){
    if(w == 375 || w == 360 || w == 412 || w == 393 || w == 414){
        $(".six").animate({"margin-left" : "70%"}, 600)
    }
    else{
    $(".six").animate({"margin-left" : "180.8%"}, 600)
    }
    $(".six").css("z-index", "666")
}
function Move6(){
    if(w == 375 || w == 360 || w == 412 || w == 393 || w == 414){
        $(".seven").animate({"margin-left" : "70%"}, 600)
    }
    else{
    $(".seven").animate({"margin-left" : "179%"}, 600)
    }
    $(".seven").css("z-index", "777")
}
function Move7(){
    if(w == 375 || w == 360 || w == 412 || w == 393 || w == 414){
        $(".eight").animate({"margin-left" : "70%"}, 600)
    }
    else{
    $(".eight").animate({"margin-left" : "177%"}, 600)
    }
    $(".eight").css("z-index", "888")
}
function Move8(){
    if(w == 375 || w == 360 || w == 412 || w == 393 || w == 414){
        $(".nine").animate({"margin-left" : "70%"}, 600)
    }
    else{
    $(".nine").animate({"margin-left" : "174.5%"}, 600)
    }
    $(".nine").css("z-index", "999")
}
function Move9(){
    if(w == 375 || w == 360 || w == 412 || w == 393 || w == 414){
        $(".ten").animate({"margin-left" : "70%"}, 600)
    }
    else{
    $(".ten").animate({"margin-left" : "172%"}, 600)
    }
    $(".ten").css("z-index", "999")
}
function Move10(){
    if(w == 375 || w == 360 || w == 412 || w == 393 || w == 414){
        $(".eleven").animate({"margin-left" : "70%"}, 600)
    }
    else{
    $(".eleven").animate({"margin-left" : "169.8%"}, 600)
    }
    $(".eleven").css("z-index", "1000")
}
function Move11(){
    if(w == 375 || w == 360 || w == 412 || w == 393 || w == 414){
        $(".twelve").animate({"margin-left" : "70%"}, 600)
    }
    else{
    $(".twelve").animate({"margin-left" : "167%"}, 600)
    }
    $(".twelve").css("z-index", "1111")

    setTimeout(() => {
        $(".winner").show("slow");
    }, 800);
}