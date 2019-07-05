import { createContext } from "vm";
import { Z_ASCII } from "zlib";
import { setTimeout } from "timers";


class Human {
 
    constructor(x,y,l) {

        this.bodyParts = {
            head: {
                id: null,
                x: x,
                y: y - 130,
                r: 50,
                a: Math.PI * 2,
            },
            body: {
                id: null,
                x: x,
                y: y - 100,
                l: l + 50,
            }, 
            larm: {
                id: null,
                x: x,
                y: y - 20,
                l: l + 30,
            }, 
            rarm: {
                id: null,
                x: x,
                y: y - 20,
                l: l + 30,
            }, 
            lleg: {
                id: null,
                x: x,
                y: y,
                l: l - 10,
                a: 0,
            }, 
            lknee: {
                id: null,
                x: x,
                y: y - 120,
                l: l,
                a: 0,
            }, 
            rleg: {
                id: null,
                x: x,
                y: y,
                l: l - 10,
                a: 0,
            },
            rknee: {
                id: null,
                x: x,
                y: y - 120,
                l: l,
                a: 0,
            }
        };

        const field = document.getElementById('field');
        const div = document.createElement('div');
        const humanTag = field.appendChild(div);

        for(let value in this.bodyParts) {
            console.log(this.bodyParts[value].y);
            let el = document.createElement('canvas');
            let child = humanTag.appendChild(el);
            this.bodyParts[value].id = child.getContext('2d');
            console.log(this.bodyParts[value].id);
            let ctx = this.bodyParts[value].id;
            console.log(ctx);
            

            if (value === 'head') {
                ctx.beginPath();
                ctx.arc(200, 50, 30, 0, Math.PI * 2, true);
                ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.moveTo(this.bodyParts[value].x, this.bodyParts[value].y);
                ctx.lineTo(this.bodyParts[value].x, this.bodyParts[value].y + this.bodyParts[value].l);
                ctx.stroke();
            }

            
            console.log(this.bodyParts[value].id);
        }


        /*const ctx2 = document.createElement('canvas');
        const ctx2Tag = div.appendChild(ctx2);
        const ctx3 = document.createElement('canvas');
        const ctx3Tag = div.appendChild(ctx3);
        const ctx4 = document.createElement('canvas');
        const ctx4Tag = div.appendChild(ctx4);
        const ctx5 = document.createElement('canvas');
        const ctx5Tag = div.appendChild(ctx5);
        const ctx6 = document.createElement('canvas');
        const ctx6Tag = div.appendChild(ctx6);*/


        /*const ctx1 = head.getContext('2d');
        const ctx2 = body.getContext('2d');
        const ctx3 = larm.getContext('2d');
        const ctx4 = rarm.getContext('2d');
        const ctx5 = lleg.getContext('2d');
        const ctx6 = rleg.getContext('2d');*/
        console.log(field);
    }
}



/*let human = () => {
    let head = () => {
        ctx1.beginPath();
        ctx1.arc(200, 50, 30, 0, Math.PI * 2, true);
        ctx1.stroke();
    } 

    let body = () => {
        ctx2.beginPath();
        ctx2.strokeStyle = "#00ff00";
        ctx2.moveTo(200, 80);
        ctx2.lineTo(200, 180);
        ctx2.stroke();
        
    }

    let larm = () => {
        ctx3.beginPath();
        ctx3.strokeStyle = "#ff0000";
        ctx3.moveTo(200, 160);
        ctx3.lineTo(200, 130);
        ctx3.stroke();
        
    }

    let rarm = () => {
        ctx4.beginPath();
        ctx4.strokeStyle = "blue";
        ctx4.moveTo(200, 160);
        ctx4.lineTo(200, 130);
        ctx4.stroke();
        
    } 

    let lleg = () => {
        ctx5.beginPath();
        ctx5.strokeStyle = "black";
        ctx5.moveTo(200, 180);
        ctx5.lineTo(200, 280);
        ctx5.stroke();
        
    }

    let rleg = () => {
        ctx6.beginPath();
        ctx6.strokeStyle = "orange";
        ctx6.moveTo(200, 180);
        ctx6.lineTo(200, 280);
        ctx6.stroke();
        
    } 

    let step = (ctx) => {
        console.log('start');         
        const l = 50;
        let angle = 0;

            const timerId = setInterval(function() {
                let x = Math.sin(angle) * l + 200;
                let xx = Math.sin(angle) * l + 212;
                let y = Math.cos(angle) * l + 180;
                let yy = Math.cos(angle) * l + 228;  
                ctx.clearRect(0, 0, 1000, 1000);
                ctx.beginPath();
                ctx.moveTo(200, 180);
                ctx.lineTo(x, y);
                ctx.lineTo(x, yy);
                ctx.stroke();
                const afterKnee = setTimeout(function() {
                    ctx.clearRect(0, 0, 1000, 1000);
                    ctx.beginPath();
                    ctx.moveTo(200, 180);
                    ctx.lineTo(212, 228);
                    ctx.moveTo(212, 228);
                    ctx.lineTo(xx, yy);
                    ctx.stroke();
                    if (angle > 0.26) {
                        clearInterval(timerId);
                    }
                },1500);        
                angle += 0.01;
                if (angle > 0.26) {
                    clearInterval(timerId);
                    console.log(x);
                    console.log(y);
                    console.log(yy);                                           
                }
            },50);
        console.log('completed'); 
    }
    
   
    head();
    body();
    larm();
    rarm();
    lleg();
    rleg();


    
    setTimeout(step(ctx5), 200);

    
}*/



export default Human;

