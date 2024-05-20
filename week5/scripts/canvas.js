const canvas = document.getElementById('tutorial');
const canvas2 = document.getElementById('tutorial2');
const canvas3 = document.getElementById('tutorial3');
const canvas4 = document.getElementById('tutorial4');
const canvas5 = document.getElementById('tutorial5');
const canvas6 = document.getElementById('tutorial6');
const canvas7 = document.getElementById('assignment');

function draw() {
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        // red square
        ctx.fillStyle = "rgb(200 0 0)";
        ctx.fillRect(10, 10, 50, 50);
        // blue square
        ctx.fillStyle = "rgb(0 0 200 / 50%)";
        ctx.fillRect(30, 30, 50, 50);

        // large blue square
        ctx.fillRect(25, 25, 100, 100);
        // white square
        ctx.clearRect(45, 45, 60, 60);
        // black square outline
        ctx.strokeRect(50, 50, 50, 50);

        //blue triangle
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();

        //Smiley Face
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
        ctx.stroke();
    
        // Filled triangle
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.lineTo(25, 105);
        ctx.fill();

        // Stroked triangle
        ctx.beginPath();
        ctx.moveTo(125, 125);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();
    }
}


function draw2() {
    if (canvas2.getContext) {
        const ctx2 = canvas2.getContext("2d");

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                ctx2.beginPath();
                const x = 25 + j * 50; // x coordinate
                const y = 25 + i * 50; // y coordinate
                const radius = 20; // Arc radius
                const startAngle = 0; // Starting point on circle
                const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
                const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

                ctx2.arc(x, y, radius, startAngle, endAngle, counterclockwise);

                if (i > 1) {
                ctx2.fill();
                } else {
                ctx2.stroke();
                }
            }
        }
    }
}

function draw3() {
    if (canvas.getContext) {
        const ctx3 = canvas3.getContext("2d");

        // Quadratic curves example
        ctx3.beginPath();
        ctx3.moveTo(75, 25);
        ctx3.quadraticCurveTo(25, 25, 25, 62.5);
        ctx3.quadraticCurveTo(25, 100, 50, 100);
        ctx3.quadraticCurveTo(50, 120, 30, 125);
        ctx3.quadraticCurveTo(60, 120, 65, 100);
        ctx3.quadraticCurveTo(125, 100, 125, 62.5);
        ctx3.quadraticCurveTo(125, 25, 75, 25);
        ctx3.stroke();

        // Cubic curves example
        ctx3.beginPath();
        ctx3.moveTo(75, 40);
        ctx3.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx3.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx3.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx3.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx3.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx3.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx3.fill();
        }
}

function draw4() {
    if (canvas4.getContext) {
        const ctx4 = canvas4.getContext("2d");

        roundedRect(ctx4, 12, 12, 150, 150, 15);
        roundedRect(ctx4, 19, 19, 150, 150, 9);
        roundedRect(ctx4, 53, 53, 49, 33, 10);
        roundedRect(ctx4, 53, 119, 49, 16, 6);
        roundedRect(ctx4, 135, 53, 49, 33, 10);
        roundedRect(ctx4, 135, 119, 25, 49, 10);

        ctx4.beginPath();
        ctx4.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
        ctx4.lineTo(31, 37);
        ctx4.fill();

        for (let i = 0; i < 8; i++) {
            ctx4.fillRect(51 + i * 16, 35, 4, 4);
        }

        for (let i = 0; i < 6; i++) {
            ctx4.fillRect(115, 51 + i * 16, 4, 4);
        }

        for (let i = 0; i < 8; i++) {
            ctx4.fillRect(51 + i * 16, 99, 4, 4);
        }

        ctx4.beginPath();
        ctx4.moveTo(83, 116);
        ctx4.lineTo(83, 102);
        ctx4.bezierCurveTo(83, 94, 89, 88, 97, 88);
        ctx4.bezierCurveTo(105, 88, 111, 94, 111, 102);
        ctx4.lineTo(111, 116);
        ctx4.lineTo(106.333, 111.333);
        ctx4.lineTo(101.666, 116);
        ctx4.lineTo(97, 111.333);
        ctx4.lineTo(92.333, 116);
        ctx4.lineTo(87.666, 111.333);
        ctx4.lineTo(83, 116);
        ctx4.fill();

        ctx4.fillStyle = "white";
        ctx4.beginPath();
        ctx4.moveTo(91, 96);
        ctx4.bezierCurveTo(88, 96, 87, 99, 87, 101);
        ctx4.bezierCurveTo(87, 103, 88, 106, 91, 106);
        ctx4.bezierCurveTo(94, 106, 95, 103, 95, 101);
        ctx4.bezierCurveTo(95, 99, 94, 96, 91, 96);
        ctx4.moveTo(103, 96);
        ctx4.bezierCurveTo(100, 96, 99, 99, 99, 101);
        ctx4.bezierCurveTo(99, 103, 100, 106, 103, 106);
        ctx4.bezierCurveTo(106, 106, 107, 103, 107, 101);
        ctx4.bezierCurveTo(107, 99, 106, 96, 103, 96);
        ctx4.fill();

        ctx4.fillStyle = "black";
        ctx4.beginPath();
        ctx4.arc(101, 102, 2, 0, Math.PI * 2, true);
        ctx4.fill();

        ctx4.beginPath();
        ctx4.arc(89, 102, 2, 0, Math.PI * 2, true);
        ctx4.fill();
    }
}

// A utility function to draw a rectangle with rounded corners.
function roundedRect(ctx4, x, y, width, height, radius) {
    ctx4.beginPath();
    ctx4.moveTo(x, y + radius);
    ctx4.arcTo(x, y + height, x + radius, y + height, radius);
    ctx4.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx4.arcTo(x + width, y, x + width - radius, y, radius);
    ctx4.arcTo(x, y, x, y + radius, radius);
    ctx4.stroke();
}

function draw5() {
    if (canvas5.getContext) {
        const ctx5 = canvas5.getContext("2d");

        ctx5.beginPath();

        // Outer shape clockwise ⟳
        ctx5.moveTo(0, 0);
        ctx5.lineTo(150, 0);
        ctx5.lineTo(75, 129.9);

        // Inner shape anticlockwise ↺
        ctx5.moveTo(75, 20);
        ctx5.lineTo(50, 60);
        ctx5.lineTo(100, 60);

        ctx5.fill();
    }
}

function draw6() {
    if (canvas6.getContext) {
        const ctx6 = canvas6.getContext("2d");

        const rectangle = new Path2D();
        rectangle.rect(10, 10, 50, 50);

        const circle = new Path2D();
        circle.arc(100, 35, 25, 0, 2 * Math.PI);

        ctx6.stroke(rectangle);
        ctx6.fill(circle);
    }
}

function draw7() {
    if (canvas.getContext) {
        const ctx7 = canvas7.getContext("2d");

        //Smiley Face
        ctx7.beginPath();
        ctx7.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        ctx7.moveTo(110, 75);
        ctx7.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
        ctx7.moveTo(65, 65);
        ctx7.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
        ctx7.moveTo(95, 65);
        ctx7.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
        ctx7.stroke();

        // //Sad Face
        // ctx7.beginPath();
        // ctx7.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        // ctx7.moveTo(110, 75);
        // ctx7.arc(75, 75, 35, 0, Math.PI, false); // Mouth (counter-clockwise)
        // ctx7.moveTo(65, 65);
        // ctx7.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
        // ctx7.moveTo(95, 65);
        // ctx7.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
        // ctx7.stroke();
    }
}

window.addEventListener("load", draw);
draw2();
draw3();
draw4();
draw5();
draw6();

// draw7();
// const drawBtn = document.querySelector('#draw-btn');
// drawBtn.addEventListener('click', ()=> {
//     canvas7.classList.toggle('sad');
// });
