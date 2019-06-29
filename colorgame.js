let squars = document.querySelectorAll(".squer");
let container = document.querySelector("#container");
let message = document.querySelector("#placeholder");
let header = document.querySelector("#h1");
let sqcolor = colorpicker(6);
let pickedColor = sqcolor[Math.floor(Math.random() * 6)];
let resetbtn = document.querySelector('#reset');
let hard = document.querySelector('.hard');
let easy = document.querySelector('.easy');
let nav = document.querySelector('#header');
let mode = "";
let party;

container.addEventListener("click", function(event) {
    let target = event.target;

    if(target !== container && mode !== "finish") {
        if(target.style.background === pickedColor) {
            message.innerHTML = "You Win";
            mode = "finish";
            for (let i = 0; i < squars.length; i++) {
                squars[i].style.background = pickedColor; 
            }
            party = setInterval( () => {
                sqcolor = colorpicker(6);
                pickedColor = sqcolor[Math.floor(Math.random() * 6)];
                for (let i = 0; i < sqcolor.length; i++) {
                    squars[i].style.background = sqcolor[i]; 
                }
                nav.style.background = randomcolor();
                
            }, 500)
        } else {
            message.innerHTML = "Try Again";
            target.style.background = "black";
        }
    }
});

resetbtn.addEventListener('click', function() {
    reset(6);
});


easy.addEventListener('click', function() {
    for (let i = 3; i < squars.length; i++) {
        squars[i].style.background = 'black'; 
    }
    reset(3);
});


hard.addEventListener('click', function() {
    reset(6);
});


{
    for (let i = 0; i < squars.length; i++) {
        squars[i].style.background = sqcolor[i]; 
    }
    header.innerHTML = pickedColor;
}

function colorpicker(n) {
    let colors = [];
    for (let i = 0; i < n; i++) {
        colors.push(randomcolor())
    }
    return colors;
}
function randomcolor() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}

function reset(n) {
    sqcolor = colorpicker(n);
    pickedColor = sqcolor[Math.floor(Math.random() * n)];
    for (let i = 0; i < sqcolor.length; i++) {
        squars[i].style.background = sqcolor[i]; 
    }
    header.innerHTML = pickedColor;
    mode = '';
    message.innerHTML = '';
    clearInterval(party);
}