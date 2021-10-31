var canvas = document.getElementById("clock");
var context = canvas.getContext("2d");

var circle = new Path2D();
var line = new Path2D();

circle.arc(300, 300, 290, 0, 2 * Math.PI);
context.strokeStyle = "orange";
context.lineWidth = 10;
context.stroke(circle);
context.fill(circle);

function drawClock() {
    context.strokeStyle = "orange";
    context.lineWidth = 15;
    context.stroke(circle);
    context.fill(circle);
    var R = 290,
        d, angle, pX, pY, qX, qY;
    for (d = 0; d < 60; d++) {
        angle = (d / 60) * 2 * Math.PI;
        pX = Math.cos(angle) * R;
        pY = -Math.sin(angle) * R;
        qX = 0.91 * pX;
        qY = 0.91 * pY;
        pX += R + 10;
        pY += R + 10;
        qX += R + 10;
        qY += R + 10;
        context.strokeStyle = "orange";
        var line = new Path2D();
        line.moveTo(pX, pY);
        line.lineTo(qX, qY);
        if (d % 5 == 0) {
            context.lineWidth = 15;
            context.font = "30px serif"
            context.fillStyle = "red"
        
            if (d == 15) {
                context.fillText(12, qX * 0.9 + 20, qY * 0.9 + 40);
            } else {
                context.fillText((12 - (d / 5) + 3) % 12, qX * 0.9 + 20, qY * 0.9 + 40);
        }
        context.fillStyle = "black";
    } else {
        context.lineWidth = 3;
    }
    context.stroke(line);

    context.stroke(line);
}
var date = new Date();
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hours = date.getHours();
var secAngle = ((seconds / 60) * (2 * Math.PI));
context.strokeStyle = "red";
context.lineWidth = 5;
var sPX = Math.sin(secAngle) * R * 0.95 + R + 10;
var sPY = -Math.cos(secAngle) * R * 0.95 + R + 10;
var sQX = R + 10;
var sQY = R + 10;
var sLine = new Path2D();
sLine.moveTo(sQX, sQY);
sLine.lineTo(sPX, sPY);
context.stroke(sLine);

var minAngle = ((minutes / 60) * (2 * Math.PI));
context.strokeStyle = "orange";
context.lineWidth = 10;
var sPX1 = Math.sin(minAngle) * R * 0.75 + R + 10;
var sPY1 = -Math.cos(minAngle) * R * 0.75 + R + 10;
var sQX1 = R + 10;
var sQY1 = R + 10;
var sLine1 = new Path2D();
sLine1.moveTo(sQX1, sQY1);
sLine1.lineTo(sPX1, sPY1);
context.stroke(sLine1);

var hoursAngle = hours % 12 / 12 * 2 * Math.PI;
context.strokeStyle = "green";
context.lineWidth = 15;
var sPX2 = Math.sin(hoursAngle) * R * 0.5 + R + 10;
var sPY2 = -Math.cos(hoursAngle) * R * 0.5 + R + 10;
var sQX2 = R + 10;
var sQY2 = R + 10;
var sLine2 = new Path2D();
sLine2.moveTo(sQX2, sQY2);
sLine2.lineTo(sPX2, sPY2);
context.stroke(sLine2);

setTimeout(drawClock, 1000)

}
drawClock();