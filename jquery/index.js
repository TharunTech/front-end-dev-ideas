

// $(document).ready(function(){//if jquery script not at the end , tat is if its in the begning  or headder just include this function to load the library first.
//     $("h1").css("color","red");
// })

// $(document).keypress(function(event){
//     $("h1").text(event.key);

// })

// $("h1").on("click",function(){
//     $("h1").css("color","purple");
// })//to change color on click

$("button").on("click",function(){
    $("h1").animate({margin:"20%"});
})