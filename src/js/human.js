export class Human {

    constructor (x, y, height) {
        this.mult = 2;
        this.x = x * this.mult;
        this.y = y * this.mult;
        self = this;
        console.log('height = ' + height);        
    }

    draw () {
        console.log('test');
    }

}
