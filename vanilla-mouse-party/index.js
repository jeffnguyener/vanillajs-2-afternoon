let mousePosition = { x: 0, y: 0 };
let drawId;

let getRandomNumber = function (min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
};

window.addEventListener('mousemove', function (mouseMoveEvent) {
    mousePosition.x = mouseMoveEvent.pageX;
    mousePosition.y = mouseMoveEvent.pageY;
});

function draw() {
    return setInterval(function () {
        let container = document.getElementById("wrap");
        let color = `background:rgb(${getRandomNumber(
            0,
            255
        )},${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)});`;
        let ballSize = getRandomNumber(10, 30);
        let size = `height:${ballSize}px; width:${ballSize}px;`;
        let left = `left:${getRandomNumber(
            mousePosition.x - ballSize,
            mousePosition.x
        )}px;`;
        let top = `top:${getRandomNumber(
            mousePosition.y - ballSize,
            mousePosition.y
        )}px; `;
        let style = `${left}${top}${color}${size}`;
        let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style = style;

    ball.addEventListener("animationend", function(e) {
      e.target.remove();
    });

    container.appendChild(ball);
  }, 50);
}
window.addEventListener('mouseover', function() {
    drawId = draw();
  });
  window.addEventListener('mouseout', function() {
    clearInterval(drawId);
  });