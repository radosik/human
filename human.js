class Human {
    constructor(x, y, height) {
        this.mult = 2;
        this.x = x * this.mult;
        this.y = y * this.mult;
        self = this;
    }
}


function init() {
    ctx.beginPath();
    ctx.arc(200, 50, 30, 0, Math.PI * 2, true);
    ctx.stroke(); // head

    ctx.beginPath();
    ctx.moveTo(200, 80);
    ctx.lineTo(200, 180);
    ctx.stroke(); // body

    ctx.beginPath();
    ctx.moveTo(200, 80);
    ctx.lineTo(200, 130);
    ctx.moveTo(200, 80);
    ctx.lineTo(200, 130);
    ctx.stroke(); // arms 1

    ctx.beginPath();
    ctx.moveTo(200, 180);
    ctx.lineTo(200, 280);
    ctx.moveTo(200, 180);
    ctx.lineTo(200, 280);
    ctx.stroke(); // legs 1

    ctx.beginPath();
    ctx.moveTo(200, 130);
    ctx.lineTo(200, 180);
    ctx.moveTo(200, 130);
    ctx.lineTo(200, 180);
    ctx.stroke(); // arms 2

    ctx.beginPath();
    ctx.moveTo(200, 280);
    ctx.lineTo(200, 320);
    ctx.moveTo(200, 280);
    ctx.lineTo(200, 320);
    ctx.stroke(); // legs 2
}
init();

export default Human;