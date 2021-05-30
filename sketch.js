let curr;
let board;
 
function setup() {
    createCanvas(360, 360);
    curr = new Red(mouseX);
    board = [];
    lowest = [330, 330, 330, 330, 330, 330, 330];
    player = 1;
}

function draw() {
    background(225);
    createCircles(); 
    curr.show();
    curr.move(); 
    if (curr.movable === true) {
        curr.setX(mouseX);
    }
    var index = Math.floor(curr.x / 50);
    if (curr.y === lowest[index]) {
        board.push(curr);
        lowest[index] -= 50;
        if (this.player > 0) {
            curr = new Blue(mouseX);
        } else {
            curr = new Red(mouseX);
        }
        this.player = this.player * -1;
        console.log(this.player);
    } 
    showBoard();
}

function keyPressed() {
    if (key == ' ' && lowest[Math.floor(curr.x / 50)] > 30) {
        curr.drop();
    }
}

function showBoard() {
    for (let i = 0; i < board.length;i++) {
        board[i].show(); 
    }
}

function createCircles() {
    var x = 30;
    var y = 30;
    fill(255, 255, 255);
    stroke(255);
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            circle(x, y, 45);
            x += 50;
        }
        x = 30;
        y += 50;
    }
}