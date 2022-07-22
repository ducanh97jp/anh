
class GameBoard {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Ball {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }

    moveBall() {
        ball.x -= ball.dx;
        ball.y -= ball.dy;
        drawBall();
    }

    changeDirectionBall() {
        if (ball.x == gameBoard.width - ball.radius || ball.x < 0 + ball.radius) {
            ball.dx = -ball.dx;
        } else if (ball.y < 0 + ball.radius) {
            ball.dy = - ball.dy;
        }
    }
}

class Bar {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    moveBar() {
        document.addEventListener('keydown', function (e) {
            console.log(e);
            if (e.keyCode == 37) {
                if (bar.x > 0) {
                    bar.x -= bar.speed;
                }

            } else if (e.keyCode == 39) {
                if (bar.x < gameBoard.width - bar.width) {
                    bar.x += bar.speed;
                }
            }
        })

    }
}

function drawBall() {
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
}

function drawBar() {
    context.beginPath();
    context.rect(bar.x, bar.y, bar.width, bar.height);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();
}

function setCanvas() {
    canvas.width = gameBoard.width;
    canvas.height = gameBoard.height;
}

function checkOver() {
    if (ball.y == gameBoard.height - ball.radius) {
        GameOver = true;
    }
}

function ballImpactBar() {
    console.log(ball.y + 'ball');
    console.log(bar.y + " bar");
    if (ball.x + ball.radius >= bar.x && ball.x - ball.radius <= bar.x + bar.width && ball.y + ball.radius == bar.y) {
        ball.dy = -ball.dy;
    } else if (ball.x + ball.radius == bar.x && ball.y + ball.radius > bar.y && ball.y <= bar.y + bar.height ||
        ball.x - ball.radius == bar.x + bar.width && ball.y + ball.radius > bar.y && ball.y <= bar.y + bar.height) {
        ball.dx = -ball.dx;
    }
}

function getScore() {
    sum++;
    if (sum == 100) {
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
        sum = 0;
    }
}

function clearGameBoard() {
    context.clearRect(0, 0, gameBoard.width, gameBoard.height);
}

function isGameOver() {
    alert("Thua cuộc");
    alert("Score:" + score);
}

function start() {
    if (!GameOver) {
        clearGameBoard();
        drawBar();
        ball.moveBall();
        ball.changeDirectionBall();
        ballImpactBar();
        checkOver();
        getScore();
        requestAnimationFrame(start);
    } else {
        isGameOver();
    }
}

let canvas = document.getElementById("ball");
let context = canvas.getContext("2d");
let gameBoard = new GameBoard(500, 600);
let bar = new Bar(200, 500, 70, 10, 30);
let ball = new Ball(bar.x + (bar.width / 2), bar.y - 10, 5, 2, 10);
let GameOver = false;
let score = 0;
let sum = 0;
setCanvas();
drawBall();
drawBar();
bar.moveBar();
