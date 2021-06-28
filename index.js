let KEY_SPACE = false;
let KEY_UP = false;
let KEY_DOWN = false;
let canvas;
let ctx;

let backgroundImage = new Image();

let rocket = {
    x: 100,
    y: 100,
    width: 200,
    height: 80,
    src: "img/rocket.png"
}

let ufo = {
    x: 500,
    y: 20000,
    width: 100,
    height: 40,
    src: "img/ufo.png"
}

document.onkeydown = function(e) {
    console.log(e.keyCode);
    if (e.keyCode == 32) {
        KEY_SPACE = true;
    }

    if (e.keyCode == 38) {
        KEY_UP = true;
    }

    if (e.keyCode == 40) {
        KEY_DOWN = true;
    }
}

document.onkeyup = function(e) {
    console.log(e.keyCode);
    if (e.keyCode == 32) {
        KEY_SPACE = false;
    }

    if (e.keyCode == 38) {
        KEY_UP = false;
    }

    if (e.keyCode == 40) {
        KEY_DOWN = false;
    }
}

function startGame(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    loadImages();
    draw();
}

function loadImages(){
    backgroundImage.src = "img/galaxy_jpg.jpg";
    rocket.img = new Image();
    rocket.img.src = rocket.src;

    ufo.img = new Image();
    ufo.img.src = ufo.src;
}


function draw() {
    ctx.drawImage(backgroundImage, 0, 0);
    ctx.drawImage(rocket.img, rocket.x, rocket.y, rocket.width, rocket.height);

    requestAnimationFrame(draw);
}
