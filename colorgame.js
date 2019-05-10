        //define the varyable
var colors = connect(6);
var squares = document.querySelectorAll(".squer");
var pickedcolor = colors[h1Change()];
var colorDisplay = document.getElementById("h1");
var span = document.querySelector("#placeholder");
var header = document.getElementById("header");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector(".easy");
var hardBtn = document.querySelector(".hard");


        //change the h1 top of page
colorDisplay.textContent = pickedcolor;

        //easy button
easyBtn.addEventListener("click", function(){
   colors = connect(3);
   for(var i = 0;i < squares.length;i++){
       if(colors[i]){
           squares[i].style.background = colors[i]
       }else{
           squares[i].style.display = "none";
       }
   }
    pickedcolor = colors[h1Change()];
});

        //Hard Button
hardBtn.addEventListener("click", function() {
    colors = connect(6);
    for(var i = 0;i < squares.length;i++) {
        squares[i].style.display = "block";
    }
});

        //reset button
resetBtn.addEventListener("click", function(){
    
    pickedcolor = colors[h1Change()];
    for(var i = 0;i < squares.length;i++){
        squares[i].style.background = colors[i];
    }
    colorDisplay.textContent = pickedcolor;
    resetBtn.textContent = "NewGame";
    span.textContent = "";
    header.style.background = "dodgerblue";
});
        //paint squares
for(var i = 0;i < squares.length;i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.background;
        //compare h1 and clickedcolor
       if(clickedColor === pickedcolor){
           span.textContent = "correct!!";
           headshot()
           resetBtn.textContent = "playAgain?";
       } else{
           this.style.background = "black";
           span.textContent = "try again!!";
       }
    });
}
        //function for correct guess
function headshot(){
    for(var i = 0;i< squares.length;i++){
        squares[i].style.background = pickedcolor;
        header.style.background = pickedcolor; 
        
    }
}
        //function for random h1
function h1Change(){
  var num = Math.floor(Math.random()*colors.length);
  return(num);  
}
        //function for colors
function connect(num){
    var arr = [];
    for(var i = 0;i < num;i++){
        arr.push(detailConnect());
    }
    return(arr);
}
function detailConnect(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return("rgb(" + r + ", " +  g + ", " +  b + ")");
}
  

