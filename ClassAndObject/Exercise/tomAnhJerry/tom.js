class Rat {
    constructor(img, name, weight, speed, status) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status;
        this.img = img;
    }
    sounding() {
        console.log("chít, chít");
    }
}

class Cat {
    constructor(img, name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
        this.img = img;
    }
    sounding() {
        console.log("Meo, meo");
    }
    eatRat() {
        if (rat.status) {
            this.weight += rat.weight;
        }
    }
    arrestRat() {
        if (this.maxSpeed > rat.speed) {
            console.log("da bat duoc chuot");
        }
    }
}

function drawRat() {
    return '<img width="' + rat.weight + '"' +
    ' height="' + rat.weight + '"' +
    ' src="' + rat.img + '"' +
    ' style="top: ' + height + 'px; left:' + width + 'px;position:absolute;" />';
}

function drawCat() {
    return '<img width="' + cat.weight + '"' +
    ' height="' + cat.weight + '"' +
    ' src="' + cat.img + '"' +
    ' style="top: ' + height1 + 'px; left:' + width1 + 'px;position:absolute;" />';
}

function start() {
    document.getElementById("canvas").innerHTML = drawCat();
}
let rat = new Rat("jerry.jpeg", "jerry", 10, 5, true);
let cat = new Cat("download.jpeg", "tom", 50, 7);
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = Math.floor(Math.random() * canvas.width);
let height = Math.floor(Math.random() * canvas.height);
let width1 = Math.floor(Math.random() * canvas.width);
let height1 = Math.floor(Math.random() * canvas.height);
start();