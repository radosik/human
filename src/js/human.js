import { createContext } from "vm";
import { Z_ASCII } from "zlib";
import { setTimeout } from "timers";


class Human {
 
    constructor(x,y,l) {
        this.bodyParts = {
            head: {
                id: null,
                name: 'head',
                x: x,
                y: y - l * 3.5,
                xEnd: 0,
                yEnd: 0,
                l: l,
                a: 0,
                child: []
            },

            body: {
                id: null,
                name: 'body',
                x: x,
                y: y,
                xEnd: x,
                yEnd: y - l * 3.5,
                l: l * 3.5,
                a: 180,
                child: ['head']
            },

            rleg: {
                id: null,
                name: 'rightLeg',
                x: x,
                y: y,
                xEnd: x,
                yEnd: y + l * 1.5,
                l: l * 1.5,
                a: 0,
                child: ['rknee']
            },

            rknee: {
                id: null,
                name: 'rightKnee',
                x: x,
                y: y + l * 1.5,
                xEnd: x,
                yEnd: y + l * 3.5,
                l: l * 2,
                a: 0,
                child: []
            },

            lleg: {
                id: null,
                name: 'leftLeg',
                x: x,
                y: y,
                xEnd: x,
                yEnd: y + l * 1.5,
                l: l * 1.5,
                a: 0,
                child: ['lknee']
            },

            lknee: {
                id: null,
                name: 'leftKnee',
                x: x,
                y: y + l * 1.5,
                xEnd: x,
                yEnd: y + l * 3.5,
                l: l * 2,
                a: -25,
                child: []
            }

        };

        self = this;

        const field = document.getElementById('field');
        const div = document.createElement('div');
        const humanTag = field.appendChild(div);

        // init contexts
        for(let value in this.bodyParts) {
            let el = document.createElement('canvas');
            let child = humanTag.appendChild(el);

            child.width = window.innerWidth;
            child.height = window.innerHeight;            

            this.bodyParts[value].id = child.getContext('2d');
            let ctx = this.bodyParts[value].id;

            ctx.width = window.innerWidth;
            ctx.height = window.innerHeight;
        }

        // draw person
        for(let value in this.bodyParts) {  

            let ctx = this.bodyParts[value].id;

            if (value === 'head') {
                ctx.beginPath();
                ctx.arc(this.bodyParts[value].x, this.bodyParts[value].y - this.bodyParts[value].l/2, this.bodyParts[value].l/2, 0, Math.PI * 2, true);
                ctx.fillStyle = "blue";
                ctx.fill();
            } else {
                this.drawPart(this.bodyParts[value]);
            }
        }
    }

    drawPart (value) {

        const ctx = value.id;
        let x,y;
        ctx.clearRect(0, 0, ctx.width, ctx.height);
        ctx.beginPath();
        ctx.moveTo(value.x, value.y);
        x = Math.sin(value.a * Math.PI / 180) * value.l + value.x;
        y = Math.cos(value.a * Math.PI / 180) * value.l + value.y;        

        // has been changed?
        if (x !== value.xEnd  && y !== value.yEnd) {
            value.xEnd = x;
            value.yEnd = y;
            for (let i = 0; i < value.child.length; i++) {
                this.bodyParts[value.child[i]].x = value.xEnd;
                this.bodyParts[value.child[i]].y = value.yEnd;
                this.drawPart(this.bodyParts[value.child[i]]);
            }
        }

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();                
        ctx.arc(value.x, value.y, 5, 0, Math.PI * 2, true);
        ctx.fillStyle = "blue";
        ctx.fill();    
    }

    drawStep (value, goal, sign = true) {
        const mult = sign ? 1: -1;

        const timerId = setInterval(function() {
            self.drawPart(self.bodyParts[value]);
            self.bodyParts[value].a += 2 * mult;
            if (self.bodyParts[value].a * mult > goal * mult) {
                clearInterval(timerId);
                self.drawStep ('lleg',-25,false);                
            }
        },50);        
    }

}

export default Human;

