class Blue {
    constructor(x) {
        this.x = Math.round(x / 50)*50 + 30;
        this.y = 30;
        this.vy = 0;
        this.gravity = 1;
        this.c = 330;
        this.movable = true;
    }

    drop() {
        this.vy = 5;
    }

    move() {
        this.y += this.vy;
        if (this.vy !== 0) {
            this.movable = false;
        }
        this.y = constrain(this.y, 0, this.c);
    }

    show() {
        noStroke();
        fill(0,0,255);
        circle(this.x, this.y, 45);
    }

    setX(m) {
        this.x = Math.round(m / 50)*50 + 30;
        this.x = constrain(this.x, 30, 330);
    }
}